# Create a BankAccount Class with Validation

## Language

Java

## Level

Junior

## Main Pattern

OOP, encapsulation, validation, methods.

## Prompt

Create a Java class called `BankAccount`.

The class should have:

- an `owner`
- a `balance`
- a constructor
- getters
- a method to deposit money
- a method to withdraw money

The class should validate that:

- the owner is not `null` or empty
- the initial balance cannot be negative
- deposits must be greater than `0`
- withdrawals must be greater than `0`
- withdrawals cannot be greater than the current balance

## Example Input

```java
BankAccount account = new BankAccount("Ana", 100);
account.deposit(50);
account.withdraw(30);
account.getBalance();
```

## Expected Output

```text
120.0
```

## Thinking Checklist

Before coding, answer these questions:

1. What class do I need to create?
2. What attributes does the class need?
3. Do I need a constructor?
4. Do I need getters?
5. What methods should change the balance?
6. What validation should I add?
7. How would I explain this out loud?

## Expected Thinking

### What class do I need to create?

A class called:

```java
BankAccount
```

### What attributes does the class need?

The class needs:

```java
private String owner;
private double balance;
```

### Do I need a constructor?

Yes.

The constructor should receive the owner and the initial balance.

### Do I need getters?

Yes.

The class should allow reading the owner and balance.

### Do I need setters?

Not necessarily.

For this exercise, the balance should only change through `deposit()` and `withdraw()`.

This protects the object from invalid changes.

### What methods should change the balance?

The class should have:

```java
deposit(double amount)
withdraw(double amount)
```

### What validation should I consider?

Validation should prevent:

- empty owner
- negative initial balance
- zero or negative deposits
- zero or negative withdrawals
- withdrawals greater than the balance

## Starter Code

```java
public class BankAccount {
    // attributes

    // constructor

    // getters

    // deposit method

    // withdraw method
}
```

## Panic Recovery Hints

### Hint 1

Start by creating the class and private attributes.

### Hint 2

Use private attributes to protect the object state.

```java
private String owner;
private double balance;
```

### Hint 3

Create a constructor that receives `owner` and `balance`.

### Hint 4

Validate the owner and initial balance inside the constructor.

### Hint 5

The `deposit` method should increase the balance only if the amount is greater than `0`.

### Hint 6

The `withdraw` method should decrease the balance only if the amount is valid and not greater than the current balance.

## Speak While Coding

A good explanation could be:

```text
I’ll create a BankAccount class with private attributes for owner and balance. I’ll use a constructor to initialize the account and validate the initial values. I’ll expose getters to read the data, but I will not create a direct setter for balance. Instead, the balance changes through deposit and withdraw methods, because those methods can control the validation rules.
```

## Suggested Solution

```java
public class BankAccount {
    private String owner;
    private double balance;

    public BankAccount(String owner, double balance) {
        if (owner == null || owner.isBlank()) {
            throw new IllegalArgumentException("Owner cannot be null or empty");
        }

        if (balance < 0) {
            throw new IllegalArgumentException("Initial balance cannot be negative");
        }

        this.owner = owner;
        this.balance = balance;
    }

    public String getOwner() {
        return owner;
    }

    public double getBalance() {
        return balance;
    }

    public void deposit(double amount) {
        if (amount <= 0) {
            throw new IllegalArgumentException("Deposit amount must be greater than zero");
        }

        balance += amount;
    }

    public void withdraw(double amount) {
        if (amount <= 0) {
            throw new IllegalArgumentException("Withdrawal amount must be greater than zero");
        }

        if (amount > balance) {
            throw new IllegalArgumentException("Insufficient balance");
        }

        balance -= amount;
    }
}
```

## Full Java Example

```java
public class Main {
    public static void main(String[] args) {
        BankAccount account = new BankAccount("Ana", 100);

        account.deposit(50);
        account.withdraw(30);

        System.out.println(account.getOwner());
        System.out.println(account.getBalance());
    }
}

class BankAccount {
    private String owner;
    private double balance;

    public BankAccount(String owner, double balance) {
        if (owner == null || owner.isBlank()) {
            throw new IllegalArgumentException("Owner cannot be null or empty");
        }

        if (balance < 0) {
            throw new IllegalArgumentException("Initial balance cannot be negative");
        }

        this.owner = owner;
        this.balance = balance;
    }

    public String getOwner() {
        return owner;
    }

    public double getBalance() {
        return balance;
    }

    public void deposit(double amount) {
        if (amount <= 0) {
            throw new IllegalArgumentException("Deposit amount must be greater than zero");
        }

        balance += amount;
    }

    public void withdraw(double amount) {
        if (amount <= 0) {
            throw new IllegalArgumentException("Withdrawal amount must be greater than zero");
        }

        if (amount > balance) {
            throw new IllegalArgumentException("Insufficient balance");
        }

        balance -= amount;
    }
}
```

## Interview Feedback

A strong junior answer should show that the candidate can:

- create a class
- define private attributes
- use a constructor
- validate input
- use getters
- protect object state
- change balance through controlled methods
- explain encapsulation clearly

## Employer Perspective

In a junior interview, the employer is checking if the candidate understands basic OOP and encapsulation.

This exercise shows whether the candidate can protect data instead of exposing everything directly.

A good candidate should explain why the balance should not be changed freely with a public setter.

## Common Mistakes

Common mistakes include:

- making attributes public
- creating a public setter for balance without validation
- allowing negative deposits
- allowing withdrawals greater than the balance
- forgetting to validate the constructor
- forgetting `this`
- placing all logic in `main`
- not explaining encapsulation

## Good Interview Sentence

```text
I will not create a direct setter for balance because balance should only change through controlled operations like deposit and withdraw.
```

## Status

Drafted.