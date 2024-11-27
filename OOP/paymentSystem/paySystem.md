
# Payment System - OOP Implementation in TypeScript

## Overview

This TypeScript-based payment system simulates a simple yet extensible way of processing payments using 
Object-Oriented Programming (OOP) principles. The system allows users to make payments using different
 payment methods (such as Credit Card or PayPal). It is designed to be easily extendable, 
 so you can add more payment methods and functionalities as needed.

## Key Concepts

The system is designed around the following classes:

1. **PaymentMethod (Abstract Class)**
2. **CreditCard (PaymentMethod subclass)**
3. **PayPal (PaymentMethod subclass)**
4. **User**
5. **Transaction**

Each class represents a different part of the payment process and is designed to follow
 OOP best practices such as encapsulation, inheritance, and polymorphism.

---

## Components

### 1. `PaymentMethod` (Abstract Class)

The `PaymentMethod` class serves as a blueprint for all types of payment methods (such as Credit Cards or PayPal). It defines the basic behavior and properties that every payment method must have.

- **Properties**:
  - `amount`: The amount of money to be paid.

- **Methods**:
  - `processPayment()`: An abstract method that must be implemented by any class that extends `PaymentMethod`. This method is responsible for processing the payment and returning a message indicating the payment status.

```typescript
abstract class PaymentMethod {
    protected amount: number;

    constructor(amount: number) {
        this.amount = amount;
    }

    abstract processPayment(): string;
}
```

### 2. `CreditCard` (Subclass of PaymentMethod)

The `CreditCard` class represents a payment method where users pay using a credit card. It inherits from the `PaymentMethod` class and implements the `processPayment()` method.

- **Properties**:
  - `cardNumber`: The card number used for payment.
  - `expiryDate`: The expiry date of the credit card.

- **Method**:
  - `processPayment()`: This method simulates processing the payment using the card number and returns a string with payment details.

```typescript
class CreditCard extends PaymentMethod {
    private cardNumber: string;
    private expiryDate: string;

    constructor(amount: number, cardNumber: string, expiryDate: string) {
        super(amount);
        this.cardNumber = cardNumber;
        this.expiryDate = expiryDate;
    }

    processPayment(): string {
        return `Processing credit card payment of $${this.amount} using card number: ${this.cardNumber}.`;
    }
}
```

### 3. `PayPal` (Subclass of PaymentMethod)

The `PayPal` class represents a payment method where users pay via PayPal. Like `CreditCard`, it extends the `PaymentMethod` class and implements the `processPayment()` method.

- **Properties**:
  - `email`: The PayPal email associated with the payment.

- **Method**:
  - `processPayment()`: This method simulates processing the payment through PayPal using the user's email.

```typescript
class PayPal extends PaymentMethod {
    private email: string;

    constructor(amount: number, email: string) {
        super(amount);
        this.email = email;
    }

    processPayment(): string {
        return `Processing PayPal payment of $${this.amount} from email: ${this.email}.`;
    }
}
```

### 4. `User`

The `User` class represents a user in the payment system. A user can make a payment by using different payment methods (e.g., credit card or PayPal).

- **Properties**:
  - `name`: The name of the user.
  - `email`: The email of the user.

- **Method**:
  - `makePayment(paymentMethod: PaymentMethod)`: This method allows the user to make a payment using a specified payment method, and it calls the `processPayment()` method of the payment method.

```typescript
class User {
    private name: string;
    private email: string;

    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
    }

    makePayment(paymentMethod: PaymentMethod): string {
        return paymentMethod.processPayment();
    }
}
```

### 5. `Transaction`

The `Transaction` class represents a financial transaction made by a user using a specific payment method. It generates a unique transaction ID and processes the payment.

- **Properties**:
  - `user`: The user who is making the payment.
  - `paymentMethod`: The payment method being used (e.g., credit card or PayPal).
  - `transactionId`: A unique identifier for the transaction.

- **Methods**:
  - `generateTransactionId()`: Generates a random transaction ID.
  - `processTransaction()`: Simulates processing the transaction and outputs the details of the transaction.

```typescript
class Transaction {
    private user: User;
    private paymentMethod: PaymentMethod;
    private transactionId: string;

    constructor(user: User, paymentMethod: PaymentMethod) {
        this.user = user;
        this.paymentMethod = paymentMethod;
        this.transactionId = this.generateTransactionId();
    }

    private generateTransactionId(): string {
        return 'TXN' + Math.floor(Math.random() * 1000000).toString();
    }

    processTransaction(): string {
        const paymentMessage = this.user.makePayment(this.paymentMethod);
        return `Transaction ID: ${this.transactionId}\n${paymentMessage}`;
    }
}
```

---

## Example Usage

Here's an example that demonstrates how to use the classes to create a payment system where a user makes payments using different methods:

```typescript
const user1 = new User("John Doe", "john.doe@example.com");
const creditCardPayment = new CreditCard(150, "4111111111111111", "12/25");
const paypalPayment = new PayPal(75, "john.doe@paypal.com");

const transaction1 = new Transaction(user1, creditCardPayment);
console.log(transaction1.processTransaction());

const transaction2 = new Transaction(user1, paypalPayment);
console.log(transaction2.processTransaction());
```

### Output:

```plaintext
Transaction ID: TXN453210
Processing credit card payment of $150 using card number: 4111111111111111.

Transaction ID: TXN872634
Processing PayPal payment of $75 from email: john.doe@paypal.com.
```

---

## How to Extend

You can easily extend this system by adding new payment methods, such as:

- **Bank Transfer**: A class that extends `PaymentMethod` to simulate bank transfers.
- **Crypto Payment**: A class to simulate cryptocurrency payments.
  
You can also add more features such as:

- **Transaction History**: Store a history of user transactions.
- **Error Handling**: Handle cases like insufficient funds, payment failures, etc.
- **Security**: Securely handle sensitive information like card numbers and PayPal credentials.

---

## Conclusion

This TypeScript implementation provides a simple but flexible foundation for a payment system. The use of object-oriented principles makes it easy to extend and modify the system as needed.

---

This README should give you a solid understanding of the code and help you extend and modify the system as per your requirements! Let me know if you need further assistance.