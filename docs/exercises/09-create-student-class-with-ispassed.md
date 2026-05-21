# Create a Student Class with isPassed

## Language

Java

## Level

Junior

## Main Pattern

OOP, class, constructor, method.

## Prompt

Create a Java class called `Student`.

The class should have:

- a `name`
- a `grade`
- a constructor
- getters
- setters
- a method called `isPassed()`

The `isPassed()` method should return `true` if the student's grade is greater than or equal to `10`.

## Example Input

```java
Student student = new Student("Ana", 14);
student.isPassed();
```

## Expected Output

```text
true
```

## Thinking Checklist

Before coding, answer these questions:

1. What class do I need to create?
2. What attributes does the class need?
3. Do I need a constructor?
4. Do I need getters and setters?
5. What should the method return?
6. What validation should I consider?
7. How would I explain this out loud?

## Expected Thinking

### What class do I need to create?

A class called:

```java
Student
```

### What attributes does the class need?

The class needs:

```java
private String name;
private int grade;
```

### Do I need a constructor?

Yes.

The constructor should receive the initial values for `name` and `grade`.

### Do I need getters and setters?

Yes.

Getters allow reading the values.

Setters allow updating the values.

### What should the method return?

The method `isPassed()` should return a boolean.

```java
boolean
```

It returns:

- `true` if `grade >= 10`
- `false` otherwise

### What validation should I consider?

Possible validation:

- name should not be `null` or empty
- grade should not be below `0`
- grade should not be above `20`

## Starter Code

```java
public class Student {
    // attributes

    // constructor

    // getters and setters

    // isPassed method
}
```

## Panic Recovery Hints

### Hint 1

Start by creating the class and its private attributes.

### Hint 2

The attributes should be private because of encapsulation.

```java
private String name;
private int grade;
```

### Hint 3

Create a constructor with `name` and `grade` as parameters.

### Hint 4

Use getters to return attribute values.

### Hint 5

Use setters to update attribute values.

### Hint 6

The `isPassed()` method should return the result of this condition:

```java
grade >= 10
```

## Speak While Coding

A good explanation could be:

```text
I’ll create a Student class with private attributes for name and grade. Then I’ll add a constructor to initialize those values. I’ll add getters and setters to access and update the attributes. Finally, I’ll create an isPassed method that returns true when the grade is greater than or equal to 10.
```

## Suggested Solution

```java
public class Student {
    private String name;
    private int grade;

    public Student(String name, int grade) {
        setName(name);
        setGrade(grade);
    }

    public String getName() {
        return name;
    }

    public int getGrade() {
        return grade;
    }

    public void setName(String name) {
        if (name == null || name.isBlank()) {
            throw new IllegalArgumentException("Name cannot be null or empty");
        }

        this.name = name;
    }

    public void setGrade(int grade) {
        if (grade < 0 || grade > 20) {
            throw new IllegalArgumentException("Grade must be between 0 and 20");
        }

        this.grade = grade;
    }

    public boolean isPassed() {
        return grade >= 10;
    }
}
```

## Full Java Example

```java
public class Main {
    public static void main(String[] args) {
        Student student = new Student("Ana", 14);

        System.out.println(student.getName());
        System.out.println(student.getGrade());
        System.out.println(student.isPassed());
    }
}

class Student {
    private String name;
    private int grade;

    public Student(String name, int grade) {
        setName(name);
        setGrade(grade);
    }

    public String getName() {
        return name;
    }

    public int getGrade() {
        return grade;
    }

    public void setName(String name) {
        if (name == null || name.isBlank()) {
            throw new IllegalArgumentException("Name cannot be null or empty");
        }

        this.name = name;
    }

    public void setGrade(int grade) {
        if (grade < 0 || grade > 20) {
            throw new IllegalArgumentException("Grade must be between 0 and 20");
        }

        this.grade = grade;
    }

    public boolean isPassed() {
        return grade >= 10;
    }
}
```

## Interview Feedback

A strong junior answer should show that the candidate can:

- create a class
- define private attributes
- create a constructor
- use `this`
- write getters and setters
- apply validation in setters
- write a boolean method
- explain encapsulation simply

## Employer Perspective

In a junior interview, the employer is checking if the candidate understands basic OOP structure.

This exercise shows whether the candidate knows where to place attributes, constructors, getters, setters and methods.

The employer may also notice whether the candidate understands why attributes are private and why validation belongs in setters.

## Common Mistakes

Common mistakes include:

- making attributes public
- forgetting the constructor
- forgetting `this`
- writing getters with `void`
- writing setters with return values unnecessarily
- placing validation only in `main`
- forgetting to return a boolean in `isPassed`
- not explaining encapsulation

## Good Interview Sentence

```text
I’ll keep the attributes private and expose them through getters and setters so the class controls how its data is accessed and updated.
```

## Status

Drafted.