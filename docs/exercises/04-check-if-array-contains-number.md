# Check if an Array Contains a Number

## Language

Java

## Level

Junior

## Main Pattern

Loop, boolean return, early return.

## Prompt

Write a Java method that receives an array of integers and a target number. The method should return `true` if the array contains the target number, and `false` otherwise.

## Example Input

```java
containsNumber(new int[]{3, 8, 2, 10, 5}, 10);
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

An array of integers and one target number.

```java
int[] numbers
int target
```

### What is the output?

A boolean value:

```java
boolean
```

The method returns:

- `true` if the target exists in the array
- `false` if the target does not exist in the array

### Do I need a loop?

Yes.

I need to check each number in the array.

### Do I need a helper variable?

Not necessarily.

This exercise can use an early return.

If I find the target, I can return `true` immediately.

### What is the simplest approach?

Loop through the array.

For each number, compare it with the target.

If one number is equal to the target, return `true`.

If the loop finishes and the target was not found, return `false`.

### What edge cases should I consider?

The array could be:

- `null`
- empty
- contain the target once
- contain the target multiple times
- not contain the target
- contain negative numbers

## Starter Code

```java
public static boolean containsNumber(int[] numbers, int target) {
    // Your code here
}
```

## Panic Recovery Hints

### Hint 1

Start by identifying what the method receives and what it needs to return.

### Hint 2

You receive an array and a target number.

You need to return a boolean.

### Hint 3

Because you need to search inside the array, a loop can help.

### Hint 4

Inside the loop, compare each number with the target.

```java
number == target
```

### Hint 5

If you find the target, you can return `true` immediately.

### Hint 6

If the loop finishes without finding the target, return `false`.

## Speak While Coding

A good explanation could be:

```text
I’ll start by checking if the array is null. Then I’ll loop through each number and compare it with the target. If I find a number equal to the target, I can return true immediately. If the loop finishes and I did not find it, I’ll return false.
```

## Suggested Solution

```java
public static boolean containsNumber(int[] numbers, int target) {
    if (numbers == null) {
        throw new IllegalArgumentException("Array cannot be null");
    }

    for (int number : numbers) {
        if (number == target) {
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
        int[] numbers = {3, 8, 2, 10, 5};

        boolean result = containsNumber(numbers, 10);

        System.out.println(result);
    }

    public static boolean containsNumber(int[] numbers, int target) {
        if (numbers == null) {
            throw new IllegalArgumentException("Array cannot be null");
        }

        for (int number : numbers) {
            if (number == target) {
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
- understand boolean return values
- use a loop to search through data
- compare values correctly
- use early return when appropriate
- return `false` only after checking all elements
- explain the logic clearly

## Employer Perspective

In a junior interview, the employer is checking if the candidate understands search logic.

This exercise shows whether the candidate knows how to inspect a collection and stop as soon as the expected value is found.

The employer may also notice whether the candidate understands why `false` should be returned after the loop, not inside the first failed comparison.

## Common Mistakes

Common mistakes include:

- returning `false` too early inside the loop
- forgetting to return `false` after the loop
- using `=` instead of `==`
- not handling `null`
- adding unnecessary variables
- not explaining the early return
- staying silent while thinking

## Good Interview Sentence

```text
Since I only need to know whether the value exists, I can return true as soon as I find it.
```

## Status

Reviewed
