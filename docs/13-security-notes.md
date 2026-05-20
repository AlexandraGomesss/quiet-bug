# Security Notes

## Purpose

This document tracks security decisions for Quiet Bug.

Even though the MVP is simple, security needs to be considered from the beginning because users may later write code, personal answers, interview notes or job-related information inside the app.

## MVP v0 Security Decisions

For MVP v0, Quiet Bug will follow these rules:

- The app will not execute user code on the server.
- The app will not require login.
- The app will not collect sensitive personal data.
- The app will not store real interview emails.
- The app will not use payment data.
- The app will not use AI feedback yet.
- Exercises will be stored as static data first.
- User input will stay temporary in the browser for now.

## Code Execution

Quiet Bug MVP v0 will not execute user-submitted code.

This is intentional.

Executing user code can be dangerous because users could submit code that:

- runs forever
- consumes too much memory
- tries to access files
- tries to access environment variables
- tries to make network requests
- affects the server

Code execution may be added in a future version only with proper sandboxing.

Future code execution must include:

- isolated sandbox environment
- time limits
- memory limits
- no file system access
- no network access
- input size limits
- output size limits
- error handling

## Frontend Security

The frontend must not expose sensitive information.

Rules:

- Do not store API keys in frontend code.
- Do not expose backend secrets.
- Do not expose database credentials.
- Do not hardcode private tokens.
- Do not display raw unsafe user-generated HTML.
- Validate data before using it in components.
- Keep environment-specific values outside the committed codebase.

## Backend Security

When the backend is added, it should follow these rules:

- Validate all incoming requests.
- Limit text field sizes.
- Return only the data the frontend needs.
- Use DTOs instead of exposing database entities directly.
- Do not trust frontend validation only.
- Keep secrets in environment variables.
- Handle errors without exposing internal details.
- Use HTTPS in production.

## Environment Variables

Secrets must never be committed to GitHub.

Examples of secrets:

```text
DATABASE_URL
DATABASE_USERNAME
DATABASE_PASSWORD
JWT_SECRET
OPENAI_API_KEY
```

These values should be stored in environment variables, not inside source code.

The `.gitignore` file should ignore local environment files such as:

```text
.env
.env.local
```

## User Data

MVP v0 does not store user accounts or personal progress.

Future versions may store:

- user profile
- progress
- submitted answers
- interview preparation notes
- soft skills answers

When this is added, Quiet Bug must include:

- clear data storage rules
- account deletion
- user data deletion
- authorization checks
- privacy-aware AI usage if AI is added

## AI Security

AI feedback is not part of MVP v0.

If AI is added later, the app should follow these rules:

- Do not send unnecessary personal data to AI providers.
- Tell users when AI is being used.
- Avoid storing sensitive prompts by default.
- Give users control over what they submit.
- Do not rely only on AI for technical correctness.
- Keep API keys only on the backend.

## Input Validation

All user input should be treated as untrusted.

Examples of user input:

- code textarea
- checklist answers
- soft skills answers
- interview notes
- future profile data

Validation should include:

- maximum length
- required fields when needed
- safe rendering
- backend validation
- frontend validation for user experience

## Current Security Position

Quiet Bug MVP v0 is intentionally simple and low-risk.

It avoids the riskiest features:

- no login
- no payments
- no code execution
- no AI
- no stored personal data

This allows the first version to focus on product validation before adding more complex features.