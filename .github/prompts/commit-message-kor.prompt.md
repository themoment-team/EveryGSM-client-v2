---
description: 'Recommend Korean commit messages by automatically analyzing the current branch, staged changes, and git diff.'
name: 'Commit Message KOR'
argument-hint: 'Optional: include tone preference or commit scope'
agent: 'agent'
---

Recommend Korean commit messages based on the current branch and local git state.

First, infer details automatically from git context.

- Detect current branch name.
- Detect whether staged changes exist.
- If staged changes exist, prioritize only staged files/diffs for message recommendation.
- If there are no staged changes, fall back to all changed files (unstaged + untracked).
- Summarize intent from the selected change set, file paths, status, and diffs.
- If there are commits not in develop, use commit history context.

Use shell commands as needed (for example):

- `git rev-parse --abbrev-ref HEAD`
- `git status --short`
- `git diff --name-status`
- `git diff --cached --name-status`
- `git log --oneline develop..HEAD`

Rules:

- Prefer Conventional Commits style.
- Use one of these types when possible: feat, fix, refactor, chore, docs, test, ci, build.
- Respect change-set priority: staged first, fallback to all changes only when staged is empty.
- Keep the subject line concise and specific.
- If scope is inferable, include scope in parentheses.
- Avoid guessing unsupported details.
- If evidence is weak, present safer wording.

Output format:

1. 추천 1순위

- <type(scope): 한국어 커밋 메시지>

2. 대안 3개

- <message 1>
- <message 2>
- <message 3>

3. 추천 이유

- 2~4줄로 근거 설명

4. 바로 실행 커맨드

- If staged changes exist:
  - `git commit -m "<추천 1순위 메시지>"`
- If staged changes do not exist:
  - `git add .`
  - `git commit -m "<추천 1순위 메시지>"`

Return only the final answer in Korean.
