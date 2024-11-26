var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// PaymentMethod class (abstract)
var PaymentMethod = /** @class */ (function () {
    function PaymentMethod(amount) {
        this.amount = amount;
    }
    return PaymentMethod;
}());
// CreditCard class (extends PaymentMethod)
var CreditCard = /** @class */ (function (_super) {
    __extends(CreditCard, _super);
    function CreditCard(amount, cardNumber, expiryDate) {
        var _this = _super.call(this, amount) || this;
        _this.cardNumber = cardNumber;
        _this.expiryDate = expiryDate;
        return _this;
    }
    CreditCard.prototype.processPayment = function () {
        // Simulate payment processing
        return "Processing credit card payment of $".concat(this.amount, " using card number: ").concat(this.cardNumber, ".");
    };
    return CreditCard;
}(PaymentMethod));
// PayPal class (extends PaymentMethod)
var PayPal = /** @class */ (function (_super) {
    __extends(PayPal, _super);
    function PayPal(amount, email) {
        var _this = _super.call(this, amount) || this;
        _this.email = email;
        return _this;
    }
    PayPal.prototype.processPayment = function () {
        // Simulate PayPal payment processing
        return "Processing PayPal payment of $".concat(this.amount, " from email: ").concat(this.email, ".");
    };
    return PayPal;
}(PaymentMethod));
// User class
var User = /** @class */ (function () {
    function User(name, email) {
        this.name = name;
        this.email = email;
    }
    User.prototype.makePayment = function (paymentMethod) {
        return paymentMethod.processPayment();
    };
    return User;
}());
// Transaction class
var Transaction = /** @class */ (function () {
    function Transaction(user, paymentMethod) {
        this.user = user;
        this.paymentMethod = paymentMethod;
        this.transactionId = this.generateTransactionId();
    }
    Transaction.prototype.generateTransactionId = function () {
        return 'TXN' + Math.floor(Math.random() * 1000000).toString();
    };
    Transaction.prototype.processTransaction = function () {
        var paymentMessage = this.user.makePayment(this.paymentMethod);
        return "Transaction ID: ".concat(this.transactionId, "\n").concat(paymentMessage);
    };
    return Transaction;
}());
// Example Usage
var user1 = new User("John Doe", "john.doe@example.com");
var creditCardPayment = new CreditCard(150, "4111111111111111", "12/25");
var paypalPayment = new PayPal(75, "john.doe@paypal.com");
var transaction1 = new Transaction(user1, creditCardPayment);
console.log(transaction1.processTransaction());
var transaction2 = new Transaction(user1, paypalPayment);
console.log(transaction2.processTransaction());
