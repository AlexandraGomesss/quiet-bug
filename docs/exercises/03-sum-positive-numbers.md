# Sum Positive Numbers

## Language

Java

## Level

Junior

## Main Pattern

Loop, condition, accumulator.

## Prompt

Write a Java method that receives an array of integers and returns the sum of all positive numbers.

## Example Input

```java
sumPositiveNumbers(new int[]{3, -2, 7, 0, -5, 10});
```

## Expected Output

```text
20
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

One integer: the sum of the positive numbers.

```java
int
```

### Do I need a loop?

Yes.

I need to check every number in the array.

### Do I need a helper variable?

Yes.

I need an accumulator variable to store the sum.

Example:

```java
int sum = 0;
```

### What is the simplest approach?

Start with `sum` equal to `0`.

Loop through the array.

For each number, check if it is greater than `0`.

If it is positive, add it to `sum`.

At the end, return `sum`.

### What edge cases should I consider?

The array could be:

- `null`
- empty
- contain no positive numbers
- contain only positive numbers
- contain zero
- contain negative numbers

## Starter Code

```java
public static int sumPositiveNumbers(int[] numbers) {
    // Your code here
}
```

## Panic Recovery Hints

### Hint 1

Start by identifying what the method receives and what it needs to return.

### Hint 2

You receive an array and need to return a sum.

That means you probably need a loop and an accumulator.

### Hint 3

Create a variable to store the sum.

```java
int sum = 0;
```

### Hint 4

A positive number is greater than `0`.

```java
number > 0
```

### Hint 5

Inside the loop, add the number to `sum` only if it is positive.

### Hint 6

Before looping, decide what should happen if the array is `null`.

## Speak While Coding

A good explanation could be:

```text
I’ll start by checking if the array is null. Then I’ll create a sum variable starting at zero. I’ll loop through each number and check if it is positive. If the number is greater than zero, I’ll add it to the sum. At the end, I’ll return the final sum.
```

## Suggested Solution

```java
public static int sumPositiveNumbers(int[] numbers) {
    if (numbers == null) {
        throw new IllegalArgumentException("Array cannot be null");
    }

    int sum = 0;

    for (int number : numbers) {
        if (number > 0) {
            sum += number;
        }
    }

    return sum;
}
```

## Full Java Example

```java
public class Main {
    public static void main(String[] args) {
        int[] numbers = {3, -2, 7, 0, -5, 10};

        int result = sumPositiveNumbers(numbers);

        System.out.println(result);
    }

    public static int sumPositiveNumbers(int[] numbers) {
        if (numbers == null) {
            throw new IllegalArgumentException("Array cannot be null");
        }

        int sum = 0;

        for (int number : numbers) {
            if (number > 0) {
                sum += number;
            }
        }

        return sum;
    }
}
```

## Interview Feedback

A strong junior answer should show that the candidate can:

- identify the input and output
- use a loop to inspect all values
- use an accumulator variable
- apply a condition correctly
- add values to a running total
- return the final sum
- explain the approach clearly

## Employer Perspective

In a junior interview, the employer is checking if the candidate understands basic accumulation logic.

This is a common pattern in programming: start with an initial value, inspect data, update the value and return the result.

The candidate should be able to explain why `sum` starts at `0` and why only positive numbers are added.

## Common Mistakes

Common mistakes include:

- forgetting to initialize `sum`
- returning inside the loop too early
- adding all numbers instead of only positive numbers
- using `number >= 0` when the prompt asks for positive numbers
- forgetting to return `sum`
- not handling `null`
- staying silent while thinking

## Good Interview Sentence

```text
I need to calculate a total, so I’ll use a loop and an accumulator variable.
```

## Status

Reviewed
