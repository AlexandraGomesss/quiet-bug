# Validate a Password

## Language

Java

## Level

Junior

## Main Pattern

Conditions, boolean logic, validation.

## Prompt

Write a Java method that receives a password as a string and returns `true` if the password is valid.

For this exercise, a password is valid when:

- it is not `null`
- it has at least 8 characters
- it contains at least one digit

## Example Input

```java
isValidPassword("quietbug1");
```

## Expected Output

```text
true
```

## Thinking Checklist

Before coding, answer these questions:

1. What is the input?
2. What is the output?
3. Do I need a loop?
4. Do I need a helper variable?
5. What is the simplest approach?
6. What edge cases should I consider?
7. How would I explain this out loud?

## Expected Thinking

### What is the input?

A string.

```java
String password
```

### What is the output?

A boolean value.

```java
boolean
```

The method returns:

- `true` if the password is valid
- `false` if the password is invalid

### Do I need a loop?

Yes.

I need a loop to check if the password contains at least one digit.

### Do I need a helper variable?

Not necessarily.

I can return `true` as soon as I find a digit, after checking the basic rules.

### What is the simplest approach?

First, check if the password is `null`.

Then check if the password has at least 8 characters.

Then loop through each character.

If one character is a digit, return `true`.

If the loop finishes without finding a digit, return `false`.

### What edge cases should I consider?

The password could be:

- `null`
- empty
- shorter than 8 characters
- exactly 8 characters
- longer than 8 characters
- contain no digits
- contain digits
- contain spaces or symbols

## Starter Code

```java
public static boolean isValidPassword(String password) {
    // Your code here
}
```

## Panic Recovery Hints

### Hint 1

Start by checking the simple validation rules first.

### Hint 2

If the password is `null`, it cannot be valid.

### Hint 3

If the password has fewer than 8 characters, it cannot be valid.

### Hint 4

To check for a digit, loop through each character.

### Hint 5

Use `Character.isDigit(...)`.

```java
Character.isDigit(password.charAt(i))
```

### Hint 6

If you find a digit, you can return `true` immediately.

## Speak While Coding

A good explanation could be:

```text
I’ll start by checking the basic invalid cases first. If the password is null or shorter than eight characters, I’ll return false. Then I’ll loop through each character and check if at least one character is a digit. If I find a digit, I can return true. If the loop ends without finding one, I’ll return false.
```

## Suggested Solution

```java
public static boolean isValidPassword(String password) {
    if (password == null) {
        return false;
    }

    if (password.length() < 8) {
        return false;
    }

    for (int i = 0; i < password.length(); i++) {
        if (Character.isDigit(password.charAt(i))) {
            return true;
        }
    }

    return false;
}
```

## Full Java Example

```java
public class Main {
    public static void main(String[] args) {
        String password = "quietbug1";

        boolean result = isValidPassword(password);

        System.out.println(result);
    }

    public static boolean isValidPassword(String password) {
        if (password == null) {
            return false;
        }

        if (password.length() < 8) {
            return false;
        }

        for (int i = 0; i < password.length(); i++) {
            if (Character.isDigit(password.charAt(i))) {
                return true;
            }
        }

        return false;
    }
}
```

## Interview Feedback

A strong junior answer should show that the candidate can:

- identify the input and output
- apply validation rules in order
- handle `null` safely
- use string length
- loop through characters
- use boolean return values
- explain early returns clearly

## Employer Perspective

In a junior interview, the employer is checking if the candidate can translate requirements into validation logic.

This exercise also shows whether the candidate handles invalid input before using methods like `.length()`.

A good candidate should explain the order of checks and why `null` must be checked first.

## Common Mistakes

Common mistakes include:

- calling `.length()` before checking `null`
- forgetting to check the minimum length
- returning `true` just because the length is valid
- not checking for digits
- using unnecessary complex logic
- forgetting the final `false`
- staying silent while thinking

## Good Interview Sentence

```text
I’ll check the invalid cases first, then look for the required digit.
```

## Status

Drafted.