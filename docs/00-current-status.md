# Current Status

## Project

Quiet Bug

## Tagline

Debug your nerves before the interview.

## Product Summary

Quiet Bug is a live coding interview trainer for junior developers.

It helps junior developers practise coding, communication, panic recovery and soft skills before technical interviews.

The product focuses on helping candidates show what they know with confidence, even under interview pressure.

## Current Phase

Frontend foundation.

## Last Completed Step

Refined the first static frontend practice flow into a more guided learning experience.

Frontend foundation includes:

- `index.html`
- `src/styles.css`
- `src/exercises.js`
- `src/app.js`
- static data for the first 10 Java exercises
- exercise selection
- thinking checklist
- code textarea
- progressive panic recovery hints
- guided practice flow with `Understand`, `Plan`, `Code`, `Explain` and `Review` stages
- interview follow-up questions
- edge case prompts
- soft skills interview practice cards
- oral explanation, gated suggested solution, feedback and employer perspective sections
- per-exercise draft code memory in the browser
- per-exercise checklist progress in the browser
- progress labels under each exercise button
- reset behavior for the current exercise
- clear all saved progress action with confirmation
- calm mentor visual styling for the practice workspace
- hidden suggested solution reveal button to encourage trying before looking

## Next Step

Review the guided static frontend in the browser and continue refining the interview practice flow.

Next review target:

- layout on desktop and mobile
- guided stage behavior
- exercise switching
- draft persistence after page refresh
- progress label behavior
- clear all saved progress confirmation
- hint behavior
- hidden suggested solution reveal behavior
- follow-up question usefulness
- soft skills card usefulness
- code textarea reset behavior
- content readability
- whether the review material should stay visible or be revealed after an attempt

## Important Decisions

- The product language is English.
- The first target users are junior developers with 0 to 1 year of experience.
- The first coding language is Java.
- MVP v0 has no login.
- MVP v0 does not execute user code.
- MVP v0 does not use AI feedback.
- MVP v0 uses static exercise data first.
- The first frontend prototype uses plain HTML, CSS and JavaScript.
- Suggested solutions should not be shown immediately; learners should be encouraged to try first.
- Interactivity should support calm practice and confidence, not gamification.
- Backend and database will be added later.
- The first version focuses on live coding fear, structure, communication, panic recovery and soft skills.

## Current Project Structure

```text
quiet-bug/
  .gitignore
  README.md
  docs/
    00-current-status.md
    01-product-foundation.md
    02-mvp-scope.md
    04-user-flows.md
    06-exercise-format.md
    07-content-plan.md
    13-security-notes.md
    14-development-log.md
  src/
    app.js
    exercises.js
    styles.css
  index.html
```
