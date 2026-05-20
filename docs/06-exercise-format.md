# Exercise Format

## Purpose

This document defines the structure of every Quiet Bug exercise.

Each exercise should train more than coding. It should also train structure, communication, panic recovery and interview awareness.

## Exercise Structure

Each exercise should include the following sections:

1. Title
2. Language
3. Level
4. Prompt
5. Example Input
6. Expected Output
7. Thinking Checklist
8. Code Area
9. Panic Recovery Hints
10. Speak While Coding
11. Suggested Solution
12. Interview Feedback
13. Employer Perspective

## 1. Title

The title should be short and clear.

Example:

```text
Find the Maximum Number in an Array
```

## 2. Language

The programming language used in the exercise.

For MVP v0:

```text
Java
```

Future languages may include:

```text
JavaScript
SQL
Python
TypeScript
C#
```

## 3. Level

The difficulty level.

For MVP v0:

```text
Junior
```

Future levels may include:

```text
Mid-level
Senior
```

## 4. Prompt

The prompt explains what the user needs to solve.

Example:

```text
Write a Java method that receives an array of integers and returns the largest number.
```

The prompt should be simple, realistic and similar to what a junior candidate could receive in an interview.

## 5. Example Input

The example input shows how the method could be called.

Example:

```java
findMax(new int[]{3, 8, 2, 10, 5});
```

## 6. Expected Output

The expected output shows the result.

Example:

```text
10
```

## 7. Thinking Checklist

Before coding, the user should answer simple questions.

The standard Quiet Bug checklist is:

```text
What is the input?
What is the output?
Do I need a loop?
Do I need a helper variable?
What is the simplest approach?
What edge cases should I consider?
How would I explain this out loud?
```

This checklist is one of the most important parts of the product.

It helps users avoid freezing by giving them a repeatable mental structure.

## 8. Code Area

The user needs a place to write their solution.

For MVP v0, this can be a simple textarea.

The app will not execute user code in MVP v0.

This is intentional for security and simplicity.

## 9. Panic Recovery Hints

Hints should appear progressively when the user clicks:

```text
I'm stuck
```

Hints should not give the full solution immediately.

Good hints guide the user back to structure.

Example:

```text
Hint 1: Start by identifying the input and output.
Hint 2: Since you need to inspect multiple numbers, a loop can help.
Hint 3: Use a helper variable to store the largest number found so far.
Hint 4: Consider what happens if the array is null or empty.
```

## 10. Speak While Coding

This section gives the user an example of how to explain the solution out loud.

Example:

```text
I’ll start by checking if the array is null or empty. Then I’ll assume the first element is the largest value. I’ll loop through the rest of the array and compare each number with the current maximum. If I find a larger number, I’ll update the max variable. At the end, I’ll return max.
```

This helps users practise communication, not just code.

## 11. Suggested Solution

The solution should be clear, readable and suitable for a junior interview.

Example:

```java
public static int findMax(int[] numbers) {
    if (numbers == null || numbers.length == 0) {
        throw new IllegalArgumentException("Array cannot be null or empty");
    }

    int max = numbers[0];

    for (int i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }

    return max;
}
```

## 12. Interview Feedback

Each exercise should include feedback about:

```text
Technical reasoning
Communication
Edge cases
Code readability
Recovery from mistakes
```

Example:

```text
A strong answer identifies the input and output before coding, explains the need for a loop, uses a helper variable and mentions null or empty arrays as edge cases.
```

## 13. Employer Perspective

This section explains what an employer may notice during the exercise.

Example:

```text
In a junior interview, the employer is not only checking if you know the perfect solution. They are also checking if you can structure your thinking, communicate clearly, handle edge cases and recover when you are unsure.
```

## Exercise Data Example

A complete exercise can be represented like this:

```json
{
  "id": 1,
  "title": "Find the Maximum Number in an Array",
  "language": "Java",
  "level": "Junior",
  "prompt": "Write a Java method that receives an array of integers and returns the largest number.",
  "exampleInput": "findMax(new int[]{3, 8, 2, 10, 5})",
  "expectedOutput": "10",
  "thinkingChecklist": [
    "What is the input?",
    "What is the output?",
    "Do I need a loop?",
    "Do I need a helper variable?",
    "What is the simplest approach?",
    "What edge cases should I consider?",
    "How would I explain this out loud?"
  ],
  "hints": [
    "Start by identifying the input and output.",
    "Since you need to inspect multiple numbers, a loop can help.",
    "Use a helper variable to store the largest number found so far.",
    "Consider what happens if the array is null or empty."
  ],
  "oralExplanation": "I’ll start by checking if the array is null or empty. Then I’ll assume the first element is the largest value. I’ll loop through the rest of the array and compare each number with the current maximum. If I find a larger number, I’ll update the max variable. At the end, I’ll return max.",
  "solution": "public static int findMax(int[] numbers) { ... }",
  "interviewFeedback": "A strong answer explains the input, output, loop, helper variable and edge cases.",
  "employerPerspective": "The employer is checking how you think, communicate and recover under pressure."
}
```

## Quality Rules

Every exercise should be:

- simple enough for a junior
- realistic for live coding
- focused on one main pattern
- clear in its prompt
- supported by progressive hints
- connected to interview communication
- useful even without code execution

## MVP Decision

For MVP v0, exercises will be stored as static data.

Later, exercises may be moved to a backend API and PostgreSQL database.