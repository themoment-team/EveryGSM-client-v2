#!/usr/bin/env node
import { spawnSync } from 'node:child_process';

const run = (command, args) =>
  spawnSync(command, args, {
    stdio: 'inherit',
    shell: process.platform === 'win32',
  });

const status = spawnSync('git', ['status', '--porcelain'], {
  encoding: 'utf8',
  shell: process.platform === 'win32',
});

if (status.status !== 0) {
  console.log('PR quality hook: unable to read git status, skipping checks.');
  process.exit(0);
}

if (!status.stdout.trim()) {
  console.log('PR quality hook: no local changes, skipping checks.');
  process.exit(0);
}

console.log('PR quality hook: running lint...');
const lint = run('pnpm', ['lint']);
if (lint.status !== 0) {
  process.exit(lint.status ?? 1);
}

console.log('PR quality hook: running format check...');
const format = run('pnpm', ['format:check']);
if (format.status !== 0) {
  process.exit(format.status ?? 1);
}

console.log('PR quality hook: all checks passed.');
process.exit(0);
