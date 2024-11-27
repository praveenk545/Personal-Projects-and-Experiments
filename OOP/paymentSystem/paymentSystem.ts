// PaymentMethod class (abstract)
abstract class PaymentMethod {
    protected amount: number;

    constructor(amount: number) {
        this.amount = amount;
    }

    abstract processPayment(): string;
}

// CreditCard class (extends PaymentMethod)
class CreditCard extends PaymentMethod {
    private cardNumber: string;
    private expiryDate: string;

    constructor(amount: number, cardNumber: string, expiryDate: string) {
        super(amount);
        this.cardNumber = cardNumber;
        this.expiryDate = expiryDate;
    }

    processPayment(): string {
        // Simulate payment processing
        return `Processing credit card payment of $${this.amount} using card number: ${this.cardNumber}.`;
    }
}

// PayPal class (extends PaymentMethod)
class PayPal extends PaymentMethod {
    private email: string;

    constructor(amount: number, email: string) {
        super(amount);
        this.email = email;
    }

    processPayment(): string {
        // Simulate PayPal payment processing
        return `Processing PayPal payment of $${this.amount} from email: ${this.email}.`;
    }
}

// User class
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

// Transaction class
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

// Example Usage
const user1 = new User("John Doe", "john.doe@example.com");
const creditCardPayment = new CreditCard(150, "4111111111111111", "12/25");
const paypalPayment = new PayPal(75, "john.doe@paypal.com");

const transaction1 = new Transaction(user1, creditCardPayment);
console.log(transaction1.processTransaction());
console.log("----------------")
const transaction2 = new Transaction(user1, paypalPayment);
console.log(transaction2.processTransaction());
