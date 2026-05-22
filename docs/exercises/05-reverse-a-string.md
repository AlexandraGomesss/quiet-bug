# Reverse a String

## Language

Java

## Level

Junior

## Main Pattern

String traversal, loop, result builder.

## Prompt

Write a Java method that receives a string and returns the same string reversed.

## Example Input

```java
reverseString("hello");
```

## Expected Output

```text
"olleh"
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
String text
```

### What is the output?

A string with the characters in reverse order.

```java
String
```

### Do I need a loop?

Yes.

I need to go through the characters of the string.

### Do I need a helper variable?

Yes.

I need a variable to build the reversed string.

Example:

```java
String reversed = "";
```

### What is the simplest approach?

Start with an empty string.

Loop through the original string from the last character to the first character.

Add each character to the reversed string.

At the end, return the reversed string.

### What edge cases should I consider?

The string could be:

- `null`
- empty
- contain only one character
- contain spaces
- contain repeated characters

## Starter Code

```java
public static String reverseString(String text) {
    // Your code here
}
```

## Panic Recovery Hints

### Hint 1

Start by identifying what the method receives and what it needs to return.

### Hint 2

You receive one string and need to return another string.

### Hint 3

To reverse a string, start reading it from the end.

### Hint 4

The last character index is:

```java
text.length() - 1
```

### Hint 5

Use `charAt(i)` to access each character.

```java
text.charAt(i)
```

### Hint 6

Before using `.length()`, check if the string is `null`.

## Speak While Coding

A good explanation could be:

```text
I’ll start by checking if the string is null. Then I’ll create an empty string to store the reversed result. I’ll loop from the last character to the first character using the string index. In each iteration, I’ll add the current character to the result. At the end, I’ll return the reversed string.
```

## Suggested Solution

```java
public static String reverseString(String text) {
    if (text == null) {
        throw new IllegalArgumentException("String cannot be null");
    }

    String reversed = "";

    for (int i = text.length() - 1; i >= 0; i--) {
        reversed += text.charAt(i);
    }

    return reversed;
}
```

## Full Java Example

```java
public class Main {
    public static void main(String[] args) {
        String text = "hello";

        String result = reverseString(text);

        System.out.println(result);
    }

    public static String reverseString(String text) {
        if (text == null) {
            throw new IllegalArgumentException("String cannot be null");
        }

        String reversed = "";

        for (int i = text.length() - 1; i >= 0; i--) {
            reversed += text.charAt(i);
        }

        return reversed;
    }
}
```

## Interview Feedback

A strong junior answer should show that the candidate can:

- identify the input and output
- work with string indexes
- use a loop backwards
- use `charAt`
- build a result string
- handle `null`
- explain the approach clearly

## Employer Perspective

In a junior interview, the employer is checking if the candidate understands string traversal and index-based loops.

This exercise also shows whether the candidate can avoid panic when the loop goes backwards.

A good candidate should explain why the loop starts at `text.length() - 1` and why it continues while `i >= 0`.

## Common Mistakes

Common mistakes include:

- starting at `text.length()` instead of `text.length() - 1`
- using `i > 0` instead of `i >= 0`
- forgetting to decrease `i`
- forgetting to return the reversed string
- not handling `null`
- confusing the original string with the reversed result
- staying silent while thinking

## Good Interview Sentence

```text
Because I need the characters in reverse order, I’ll loop from the last index down to zero.
```

## Status

Reviewed
