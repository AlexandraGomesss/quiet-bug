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

## 2026-05-25

### What I worked on

- Reviewed the first static frontend practice flow.
- Improved the code textarea behavior so each exercise keeps its own draft while the page is open.
- Improved the thinking checklist so each exercise keeps its own checked items while the page is open.
- Updated the reset button so it clears the current exercise draft, checklist and visible hints.
- Renamed the reset button to make it clear that it resets only the current exercise.
- Added an accessibility state to the active exercise button with `aria-current`.
- Added browser persistence with `localStorage` so code drafts, checklist progress and the selected exercise survive page refresh.
- Added progress labels under each exercise button: `Not started`, `In progress` and `Checklist complete`.
- Updated the current status document to reflect the refined practice flow.
- Manually tested the flow in the browser after opening `index.html`.

### Decisions made

- Draft code and checklist progress will be stored in browser `localStorage` for now.
- This keeps MVP v0 simple because there is still no login, backend or database.
- Browser persistence is useful for practice drafts, but it is not a replacement for real accounts or database storage later.
- Reset should affect only the current exercise, not every exercise.
- Button labels should describe the action clearly when a command could otherwise feel risky.
- Progress labels should use existing saved draft and checklist data before adding any new data model.

### Problems found

- The first version replaced the textarea with starter code every time `render()` ran.
- That meant a learner could lose their draft after switching exercises.
- Temporary JavaScript state fixed exercise switching, but still lost progress after refreshing the page.
- The progress label changed to `In progress`, but did not update to `Checklist complete` until the exercise list was re-rendered after checklist changes.
- The current status project tree was incomplete and its code block was not closed.

### Next steps

- Manually test draft persistence after refreshing the page.
- Manually test progress labels after typing code, checking one item, checking all items and resetting the current exercise.
- Review desktop and mobile layout.
- Decide whether the next improvement should be visual layout polish or a clearer completion summary.

---

## 2026-05-22

### What I worked on

- Reviewed the first batch of 10 Java exercise drafts for consistency.
- Checked exercise titles, file names, status values and section structure.
- Updated the content plan to mark the Java exercise batch as reviewed.
- Updated the current status document for the frontend foundation phase.
- Created the first static frontend structure with HTML, CSS and JavaScript.
- Added static exercise data for the first 10 Java exercises.
- Built the first Java practice page flow with exercise selection, checklist, code area, stuck hints, solution and feedback sections.
- Added interview follow-up questions and edge case prompts to make beginner exercises feel more interview-realistic.
- Added the first soft skills practice cards for interview day situations.
- Documented the product principle: simple junior exercises, serious interview habits.
- Updated the README current status.

### Decisions made

- Exercise status values should use `Reviewed` once the draft has passed the consistency review.
- The first frontend prototype will use plain HTML, CSS and JavaScript so it can run without dependency setup.
- Quiet Bug should stay small and focused, but should avoid feeling shallow by adding interview pressure around each beginner exercise.

### Problems found

- Exercise 9 had a title mismatch between the content plan and the exercise file.
- Exercise files used `Drafted.` while the content plan used status values without punctuation.
- The browser layout still needs a visual review after the first static files are opened locally.

### Next steps

- Open the static frontend in the browser.
- Review desktop and mobile layout.
- Refine the first practice flow.
- Review whether the follow-up questions and soft skills cards match real junior interview pressure.
- Decide whether to keep plain static files or move to a frontend framework.

---

## 2026-05-21

### What I worked on

- Created the first batch of 10 Java exercise drafts.
- Updated the content plan after completing the first exercise batch.
- Updated the current status document.

### Decisions made

- The first content milestone is complete when all 10 Java exercises are drafted and reviewed.

### Problems found

- IntelliJ may show Java inspection warnings inside Markdown code examples.
- These warnings can be ignored when the file is documentation and not real Java source code.

### Next steps

- Review the 10 Java exercise drafts for consistency.
- Check that the content plan matches the created files.
- Prepare the first static frontend structure.
- Build the first page using static data.

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
- Added the content plan document with the first Java exercises, soft skills topics and employer mindset topics.

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

- Create the first Java exercise content.
- Start with "Find the Maximum Number in an Array".
- Keep the exercise format consistent with `docs/06-exercise-format.md`.
- Build the first static frontend after the initial content is ready.
