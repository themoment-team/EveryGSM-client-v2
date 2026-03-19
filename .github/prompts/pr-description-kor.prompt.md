---
description: 'Generate a Korean pull request description that matches this repository template with overview, work details, screenshots, issues, and review requests.'
name: 'PR Description KOR'
argument-hint: 'Optional: add only extra context not inferable from git history'
agent: 'agent'
---

Create a Korean PR body that strictly follows this repository template.

First, infer details automatically from the current branch and local git state.

- Detect current branch name.
- Collect changed files from committed and uncommitted changes.
- Summarize change intent from file paths, commit messages, and diffs.
- If base branch exists, prefer comparing with `develop`; otherwise use available local diffs.

Use shell commands as needed (for example):

- `git rev-parse --abbrev-ref HEAD`
- `git status --short`
- `git log --oneline -n 20`
- `git diff --name-status`
- `git diff --cached --name-status`

If there is not enough evidence for a section, keep it concise and avoid guessing.
Ask follow-up questions only when absolutely necessary.

Template:

## 개요 💡

> 이 PR의 목적과 배경을 설명해주세요.

## 작업내용 ⌨️

> 이 PR에서 작업한 구체적인 내용을 작성해주세요.

## 스크린샷/동영상 📸

> UI 변경이 있는 경우 스크린샷이나 동영상을 첨부해주세요. (없다면 이 섹션을 삭제해주세요.)

## 관련 이슈 🚨

> 관련된 이슈나 참고사항을 작성해주세요. (없다면 이 섹션을 삭제해주세요.)

## 리뷰 요청사항 👀

> 특별히 집중해서 리뷰해주었으면 하는 부분이나 고민되는 부분을 작성해주세요. (없다면 이 섹션을 삭제해주세요.)

Requirements:

- Write naturally in Korean.
- Keep section titles exactly the same.
- Fill the template primarily from auto-discovered git context.
- If UI changed is not mentioned, remove the screenshot section.
- If related issues are not mentioned, remove the issue section.
- If review focus is not mentioned, remove the review request section.
- Include concrete file roles when file paths are provided.
- Prefer concise bullets under 작업내용.
- Do not add sections outside the template.

Output:

- Return only the final PR markdown body.
- No explanation before or after the markdown.
