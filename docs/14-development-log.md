# Development Log

## Purpose

This document tracks the progress of Quiet Bug.

It records what was done, what decisions were made, what problems appeared and what the next steps are.

This is useful for:

- keeping the project organized
- remembering technical decisions
- explaining the project in interviews
- showing a professional development process

---

## 2026-05-20

### What I worked on

- Created the Quiet Bug project locally.
- Created the initial documentation structure.
- Added the project to Git.
- Created the GitHub repository.
- Connected the local project to GitHub.
- Created the first project README.
- Filled the product foundation document.
- Filled the MVP scope document.
- Filled the user flows document.
- Filled the exercise format document.
- Filled the security notes document.

### Decisions made

- The product will be called Quiet Bug.
- The tagline will be: "Debug your nerves before the interview."
- The product language will be English.
- The first target users are junior developers with 0 to 1 year of experience.
- The first technical focus will be Java.
- The MVP will focus on live coding fear, panic recovery, communication and soft skills.
- The first version will not include login.
- The first version will not execute user code.
- The first version will not include AI feedback.
- The first version will use static exercise data before adding a backend/database.

### Problems found

- The product can become too large if too many features are added too early.
- Some documentation files need to stay simple and focused.
- Markdown formatting can be confusing inside IntelliJ because of the preview panel.
- IntelliJ created `.idea` files, so a root `.gitignore` was needed.

### Security notes

- API keys must never be exposed in the frontend.
- Environment variables must not be committed to GitHub.
- User code will not be executed in MVP v0.
- User input should be treated as untrusted when the app is built.
- Future backend endpoints should validate all incoming data.
- Future frontend rendering should avoid unsafe user-generated HTML.

### Next steps

- Fill the remaining documentation files if needed.
- Create the first content plan.
- Define the first 10 Java exercises.
- Start the frontend structure.
- Build the first static version before adding backend complexity.