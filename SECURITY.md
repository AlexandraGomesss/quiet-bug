# Security Policy

## Current Security Position

Quiet Bug MVP v0 is intentionally simple:

- no login
- no payments
- no backend secrets
- no code execution
- no AI API calls
- no stored personal user data

The current frontend uses static HTML, CSS and JavaScript only.

## Secrets

Do not commit real secrets to this repository.

Examples of secrets:

- database URLs
- database usernames
- database passwords
- API keys
- JWT secrets
- private tokens

Use local environment files for real values:

```text
.env
.env.local
```

These files are ignored by Git.

## Safe Example Files

Use `.env.example` for placeholder variable names only.

The example file should show which variables are needed without containing real credentials.

## Future Backend Rule

When a Spring Boot backend is added, secrets should be read from environment variables or local ignored configuration files.

Real passwords and API keys must not be hardcoded in Java, JavaScript, Markdown or committed configuration files.
