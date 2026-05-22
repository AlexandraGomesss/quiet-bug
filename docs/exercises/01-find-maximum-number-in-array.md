# Find the Maximum Number in an Array

## Language

Java

## Level

Junior

## Main Pattern

Loop, helper variable, comparison.

## Prompt

Write a Java method that receives an array of integers and returns the largest number.

## Example Input

```java
findMax(new int[]{3, 8, 2, 10, 5});
```

## Expected Output

```text
10
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

An array of integers.

```java
int[] numbers
```

### What is the output?

One integer: the largest number in the array.

```java
int
```

### Do I need a loop?

Yes.

I need to check each number in the array.

### Do I need a helper variable?

Yes.

I need a variable to store the largest number found so far.

Example:

```java
int max = numbers[0];
```

### What is the simplest approach?

Assume the first number is the largest.

Then loop through the rest of the array.

If I find a number greater than `max`, I update `max`.

At the end, I return `max`.

### What edge cases should I consider?

The array could be:

- `null`
- empty
- contain only one number
- contain negative numbers
- contain repeated numbers

## Starter Code

```java
public static int findMax(int[] numbers) {
    // Your code here
}
```

## Panic Recovery Hints

### Hint 1

Start by identifying what the method receives and what it needs to return.

### Hint 2

You receive an array and need to return one number.

That means you probably need to inspect the array.

### Hint 3

Use a variable to remember the largest number found so far.

### Hint 4

You can start by assuming the first element is the largest.

```java
int max = numbers[0];
```

### Hint 5

Loop through the array and compare each number with `max`.

### Hint 6

Before using `numbers[0]`, check if the array is `null` or empty.

## Speak While Coding

A good explanation could be:

```text
I’ll start by checking if the array is null or empty. Then I’ll assume the first element is the largest value. I’ll loop through the rest of the array and compare each number with the current maximum. If I find a larger number, I’ll update the max variable. At the end, I’ll return max.
```

## Suggested Solution

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

## Full Java Example

```java
public class Main {
    public static void main(String[] args) {
        int[] numbers = {3, 8, 2, 10, 5};

        int result = findMax(numbers);

        System.out.println(result);
    }

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
}
```

## Interview Feedback

A strong junior answer should show that the candidate can:

- identify the input and output
- use a loop correctly
- use a helper variable
- compare values
- return the correct result
- mention edge cases
- explain the approach before or during coding

## Employer Perspective

In a junior interview, the employer is not only checking if the final code works.

They are also checking if the candidate can:

- start with structure
- think out loud
- handle simple edge cases
- recover if they get stuck
- write readable code
- explain why they chose a loop and helper variable

A candidate does not need to be perfect, but they should avoid staying silent.

## Common Mistakes

Common mistakes include:

- starting the loop without checking if the array is empty
- setting `max` to `0`, which fails with negative numbers
- forgetting to return `max`
- comparing the wrong values
- staying silent while thinking
- jumping into code without explaining the approach

## Good Interview Sentence

```text
I’ll first solve the basic version, then I’ll handle edge cases like null or empty arrays.
```

## Status

Reviewed
