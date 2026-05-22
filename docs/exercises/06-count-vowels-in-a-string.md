# Count Vowels in a String

## Language

Java

## Level

Junior

## Main Pattern

String, charAt, condition, counter.

## Prompt

Write a Java method that receives a string and returns how many vowels it contains.

For this exercise, consider these vowels:

```text
a, e, i, o, u
```

The method should count both lowercase and uppercase vowels.

## Example Input

```java
countVowels("Interview");
```

## Expected Output

```text
4
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

One integer: the number of vowels in the string.

```java
int
```

### Do I need a loop?

Yes.

I need to check each character in the string.

### Do I need a helper variable?

Yes.

I need a counter to count the vowels.

Example:

```java
int count = 0;
```

### What is the simplest approach?

Start with a counter set to `0`.

Convert the string to lowercase.

Loop through each character.

If the character is a vowel, increase the counter.

At the end, return the counter.

### What edge cases should I consider?

The string could be:

- `null`
- empty
- contain no vowels
- contain only vowels
- contain uppercase letters
- contain spaces
- contain punctuation

## Starter Code

```java
public static int countVowels(String text) {
    // Your code here
}
```

## Panic Recovery Hints

### Hint 1

Start by identifying what the method receives and what it needs to return.

### Hint 2

You receive a string and need to return a count.

That means you probably need a loop and a counter.

### Hint 3

Use `charAt(i)` to access each character.

```java
text.charAt(i)
```

### Hint 4

Convert the string to lowercase so you do not need to check uppercase vowels separately.

```java
text = text.toLowerCase();
```

### Hint 5

Check if the current character is one of the vowels.

```java
c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u'
```

### Hint 6

Before using `.toLowerCase()` or `.length()`, check if the string is `null`.

## Speak While Coding

A good explanation could be:

```text
I’ll start by checking if the string is null. Then I’ll convert it to lowercase so uppercase and lowercase vowels are handled the same way. I’ll create a counter starting at zero, loop through each character using charAt, and increase the counter whenever the character is a vowel. At the end, I’ll return the counter.
```

## Suggested Solution

```java
public static int countVowels(String text) {
    if (text == null) {
        throw new IllegalArgumentException("String cannot be null");
    }

    text = text.toLowerCase();

    int count = 0;

    for (int i = 0; i < text.length(); i++) {
        char c = text.charAt(i);

        if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') {
            count++;
        }
    }

    return count;
}
```

## Full Java Example

```java
public class Main {
    public static void main(String[] args) {
        String text = "Interview";

        int result = countVowels(text);

        System.out.println(result);
    }

    public static int countVowels(String text) {
        if (text == null) {
            throw new IllegalArgumentException("String cannot be null");
        }

        text = text.toLowerCase();

        int count = 0;

        for (int i = 0; i < text.length(); i++) {
            char c = text.charAt(i);

            if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') {
                count++;
            }
        }

        return count;
    }
}
```

## Interview Feedback

A strong junior answer should show that the candidate can:

- identify the input and output
- loop through a string
- use `charAt`
- use a counter
- write clear conditional logic
- handle uppercase and lowercase letters
- mention `null` as an edge case
- explain the approach clearly

## Employer Perspective

In a junior interview, the employer is checking if the candidate understands string traversal and basic conditional logic.

This exercise also shows whether the candidate can simplify the problem by converting the string to lowercase before checking vowels.

A good candidate should explain the reasoning instead of silently writing conditions.

## Common Mistakes

Common mistakes include:

- forgetting to handle uppercase vowels
- forgetting to initialize the counter
- using `==` to compare strings instead of characters
- forgetting to use `charAt`
- forgetting to return the counter
- not handling `null`
- staying silent while thinking

## Good Interview Sentence

```text
To avoid checking both uppercase and lowercase vowels, I’ll convert the string to lowercase first.
```

## Status

Reviewed
