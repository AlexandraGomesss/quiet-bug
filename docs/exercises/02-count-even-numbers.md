# Count Even Numbers

## Language

Java

## Level

Junior

## Main Pattern

Loop, condition, counter.

## Prompt

Write a Java method that receives an array of integers and returns how many numbers are even.

## Example Input

```java
countEvenNumbers(new int[]{1, 2, 4, 7, 10});
```

## Expected Output

```text
3
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

One integer: the count of even numbers.

```java
int
```

### Do I need a loop?

Yes.

I need to check each number in the array.

### Do I need a helper variable?

Yes.

I need a counter to count how many even numbers were found.

Example:

```java
int count = 0;
```

### What is the simplest approach?

Start with a counter set to `0`.

Loop through the array.

For each number, check if it is even.

If it is even, increase the counter.

At the end, return the counter.

### What edge cases should I consider?

The array could be:

- `null`
- empty
- contain no even numbers
- contain only even numbers
- contain negative numbers

## Starter Code

```java
public static int countEvenNumbers(int[] numbers) {
    // Your code here
}
```

## Panic Recovery Hints

### Hint 1

Start by identifying what the method receives and what it needs to return.

### Hint 2

You receive an array and need to return a count.

That means you probably need a loop and a counter.

### Hint 3

Create a counter variable starting at `0`.

```java
int count = 0;
```

### Hint 4

A number is even when the remainder after division by 2 is `0`.

```java
number % 2 == 0
```

### Hint 5

Inside the loop, increase the counter only when the number is even.

### Hint 6

Before looping, decide what should happen if the array is `null`.

## Speak While Coding

A good explanation could be:

```text
I’ll start by checking if the array is null. Then I’ll create a counter starting at zero. I’ll loop through each number and check if it is even using the modulo operator. If the number is even, I’ll increase the counter. At the end, I’ll return the counter.
```

## Suggested Solution

```java
public static int countEvenNumbers(int[] numbers) {
    if (numbers == null) {
        throw new IllegalArgumentException("Array cannot be null");
    }

    int count = 0;

    for (int number : numbers) {
        if (number % 2 == 0) {
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
        int[] numbers = {1, 2, 4, 7, 10};

        int result = countEvenNumbers(numbers);

        System.out.println(result);
    }

    public static int countEvenNumbers(int[] numbers) {
        if (numbers == null) {
            throw new IllegalArgumentException("Array cannot be null");
        }

        int count = 0;

        for (int number : numbers) {
            if (number % 2 == 0) {
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
- use a loop to inspect all values
- use a counter variable
- apply a condition correctly
- use the modulo operator
- return the final count
- explain the approach clearly

## Employer Perspective

In a junior interview, the employer is checking if the candidate understands basic loop and condition logic.

They may also notice whether the candidate can explain why a counter is needed and how the modulo operator works.

A good candidate should not only write the code, but also explain the reasoning step by step.

## Common Mistakes

Common mistakes include:

- forgetting to initialize the counter
- returning inside the loop too early
- using `number / 2 == 0` instead of `number % 2 == 0`
- forgetting to increase the counter
- forgetting to return the counter
- not handling `null`
- staying silent while thinking

## Good Interview Sentence

```text
I need to count how many elements match a condition, so I’ll use a loop and a counter.
```

## Status

Drafted.