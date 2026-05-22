# Check if All Numbers Are Positive

## Language

Java

## Level

Junior

## Main Pattern

Loop, condition, early return.

## Prompt

Write a Java method that receives an array of integers and returns `true` if all numbers are positive.

For this exercise, positive means greater than `0`.

## Example Input

```java
areAllPositive(new int[]{3, 8, 2, 10, 5});
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

An array of integers.

```java
int[] numbers
```

### What is the output?

A boolean value.

```java
boolean
```

The method returns:

- `true` if all numbers are positive
- `false` if at least one number is not positive

### Do I need a loop?

Yes.

I need to check each number in the array.

### Do I need a helper variable?

Not necessarily.

I can use an early return.

If I find one number that is not positive, I can return `false` immediately.

### What is the simplest approach?

First, check if the array is `null`.

Then loop through each number.

If one number is less than or equal to `0`, return `false`.

If the loop finishes, return `true`.

### What edge cases should I consider?

The array could be:

- `null`
- empty
- contain only positive numbers
- contain zero
- contain negative numbers
- contain one number

## Starter Code

```java
public static boolean areAllPositive(int[] numbers) {
    // Your code here
}
```

## Panic Recovery Hints

### Hint 1

Start by identifying what the method receives and what it needs to return.

### Hint 2

You receive an array and need to return a boolean.

### Hint 3

Because you need to check all numbers, use a loop.

### Hint 4

Positive means greater than `0`.

```java
number > 0
```

### Hint 5

If you find a number that is not positive, return `false`.

```java
number <= 0
```

### Hint 6

If the loop finishes without finding a problem, return `true`.

## Speak While Coding

A good explanation could be:

```text
I’ll start by checking if the array is null. Then I’ll loop through each number. If I find any number that is less than or equal to zero, I can return false immediately. If the loop finishes and no invalid number was found, I’ll return true.
```

## Suggested Solution

```java
public static boolean areAllPositive(int[] numbers) {
    if (numbers == null) {
        throw new IllegalArgumentException("Array cannot be null");
    }

    for (int number : numbers) {
        if (number <= 0) {
            return false;
        }
    }

    return true;
}
```

## Full Java Example

```java
public class Main {
    public static void main(String[] args) {
        int[] numbers = {3, 8, 2, 10, 5};

        boolean result = areAllPositive(numbers);

        System.out.println(result);
    }

    public static boolean areAllPositive(int[] numbers) {
        if (numbers == null) {
            throw new IllegalArgumentException("Array cannot be null");
        }

        for (int number : numbers) {
            if (number <= 0) {
                return false;
            }
        }

        return true;
    }
}
```

## Interview Feedback

A strong junior answer should show that the candidate can:

- identify the input and output
- understand boolean return values
- use a loop correctly
- apply the condition `number <= 0`
- use early return
- return `true` only after checking all elements
- explain the approach clearly

## Employer Perspective

In a junior interview, the employer is checking if the candidate understands the difference between checking one item and checking all items.

This exercise shows whether the candidate knows that one invalid number is enough to return `false`.

The employer may also notice whether the candidate returns `true` too early inside the loop.

## Common Mistakes

Common mistakes include:

- returning `true` inside the loop too early
- using `number >= 0` when positive means greater than `0`
- forgetting that zero is not positive
- forgetting to return `true` after the loop
- not handling `null`
- making the logic more complex than needed
- staying silent while thinking

## Good Interview Sentence

```text
Since all numbers must be positive, I can return false as soon as I find one number that breaks the rule.
```

## Status

Reviewed
