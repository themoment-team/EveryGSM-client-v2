#!/usr/bin/env node
import { spawnSync } from 'node:child_process';
import path from 'node:path';

const MAX_FILES_BEFORE_FALLBACK = 200;
const CHUNK_SIZE = 50;

const ESLINT_EXTENSIONS = new Set(['.js', '.cjs', '.mjs', '.ts', '.tsx']);
const PRETTIER_EXTENSIONS = new Set(['.js', '.cjs', '.mjs', '.json', '.md', '.css', '.ts', '.tsx']);

const run = (command, args) =>
  spawnSync(command, args, {
    stdio: 'inherit',
    shell: process.platform === 'win32',
  });

const runCapture = (command, args) =>
  spawnSync(command, args, {
    encoding: 'utf8',
    shell: process.platform === 'win32',
  });

const toLines = (value) =>
  value
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

const getChangedFiles = () => {
  const status = runCapture('git', ['status', '--porcelain']);
  if (status.status !== 0) {
    return { ok: false, files: [] };
  }

  if (!status.stdout.trim()) {
    return { ok: true, files: [] };
  }

  const staged = runCapture('git', ['diff', '--cached', '--name-only', '--diff-filter=ACMR']);
  const unstaged = runCapture('git', ['diff', '--name-only', '--diff-filter=ACMR']);
  const untracked = runCapture('git', ['ls-files', '--others', '--exclude-standard']);

  if (staged.status !== 0 || unstaged.status !== 0 || untracked.status !== 0) {
    return { ok: false, files: [] };
  }

  const files = [
    ...toLines(staged.stdout),
    ...toLines(unstaged.stdout),
    ...toLines(untracked.stdout),
  ];

  return { ok: true, files: [...new Set(files)] };
};

const hasExtension = (filePath, extensions) => extensions.has(path.extname(filePath).toLowerCase());

const runInChunks = (label, files, command, argsPrefix) => {
  if (files.length === 0) {
    console.log(`PR quality hook: no ${label} targets, skipping ${label}.`);
    return 0;
  }

  console.log(`PR quality hook: running ${label} for ${files.length} changed files...`);

  for (let index = 0; index < files.length; index += CHUNK_SIZE) {
    const chunk = files.slice(index, index + CHUNK_SIZE);
    const result = run(command, [...argsPrefix, ...chunk]);

    if (result.status !== 0) {
      return result.status ?? 1;
    }
  }

  return 0;
};

const runFullChecks = () => {
  console.log('PR quality hook: large change set detected, running full lint...');
  const lint = run('pnpm', ['lint']);
  if (lint.status !== 0) {
    return lint.status ?? 1;
  }

  console.log('PR quality hook: running full format check...');
  const format = run('pnpm', ['format:check']);
  if (format.status !== 0) {
    return format.status ?? 1;
  }

  return 0;
};
const changed = getChangedFiles();

if (!changed.ok) {
  console.log('PR quality hook: unable to resolve changed files, skipping checks.');
  process.exit(0);
}

if (changed.files.length === 0) {
  console.log('PR quality hook: no local changes, skipping checks.');
  process.exit(0);
}

if (changed.files.length > MAX_FILES_BEFORE_FALLBACK) {
  process.exit(runFullChecks());
}

const eslintTargets = changed.files.filter((filePath) => hasExtension(filePath, ESLINT_EXTENSIONS));
const prettierTargets = changed.files.filter((filePath) =>
  hasExtension(filePath, PRETTIER_EXTENSIONS),
);

const lintCode = runInChunks('lint', eslintTargets, 'pnpm', ['exec', 'eslint', '--max-warnings=0']);
if (lintCode !== 0) {
  process.exit(lintCode);
}

const formatCode = runInChunks('format check', prettierTargets, 'pnpm', [
  'exec',
  'prettier',
  '--check',
]);
if (formatCode !== 0) {
  process.exit(formatCode);
}

console.log('PR quality hook: all checks passed.');
process.exit(0);
