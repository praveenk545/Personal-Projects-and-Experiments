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
var PaymentMethod_1 = /** @class */ (function () {
    function PaymentMethod_1(amount) {
        this.amount = amount;
    }
    return PaymentMethod_1;
}());
var CreditCard_1 = /** @class */ (function (_super) {
    __extends(CreditCard_1, _super);
    function CreditCard_1(amount, cardNumber, expiryDate) {
        var _this = _super.call(this, amount) || this;
        _this.cardNumber = cardNumber;
        _this.expiryDate = expiryDate;
        return _this;
    }
    CreditCard_1.prototype.paymentProcess = function () {
        return "Processing credit card payment of ".concat(this.amount, ". using card Number : ").concat(this.cardNumber, " ");
    };
    return CreditCard_1;
}(PaymentMethod_1));
var PayPal_1 = /** @class */ (function (_super) {
    __extends(PayPal_1, _super);
    function PayPal_1(amount, email) {
        var _this = _super.call(this, amount) || this;
        _this.email = email;
        return _this;
    }
    PayPal_1.prototype.paymentProcess = function () {
        return "Processing Paypal payment of ".concat(this.amount, " from email : ").concat(this.email);
    };
    return PayPal_1;
}(PaymentMethod_1));
var GPay = /** @class */ (function (_super) {
    __extends(GPay, _super);
    function GPay(amount, id) {
        var _this = _super.call(this, amount) || this;
        _this.myId = id;
        return _this;
    }
    GPay.prototype.paymentProcess = function () {
        return "Processing googlepay payment of ".concat(this.amount, " from id : ").concat(this.myId);
    };
    return GPay;
}(PaymentMethod_1));
var User_1 = /** @class */ (function () {
    function User_1(name, email) {
        this.name = name;
        this.email = email;
    }
    User_1.prototype.paymentMake = function (paymentMethod) {
        return paymentMethod.paymentProcess();
    };
    return User_1;
}());
var Transaction_1 = /** @class */ (function () {
    function Transaction_1(user, paymentMethod) {
        this.user = user;
        this.paymenetMethod = paymentMethod;
        this.transactionId = this.generateTransactionId();
    }
    Transaction_1.prototype.generateTransactionId = function () {
        return "TNX" + Math.floor(Math.random() * 1000000).toString();
    };
    Transaction_1.prototype.processTransaction = function () {
        var paymentMessage = this.user.paymentMake(this.paymenetMethod);
        return "Transaction ID : ".concat(this.transactionId, "\n ").concat(paymentMessage, ".");
    };
    return Transaction_1;
}());
var user = new User_1('kumar', 'k@gmail.com');
var cd = new CreditCard_1(250, 1232434, '12/11/2024');
var paypal = new PayPal_1(150, 'k@gmail.com');
var gpay = new GPay(200, 12344);
var tID = new Transaction_1(user, cd);
var tID_1 = new Transaction_1(user, paypal);
var tID_2 = new Transaction_1(user, gpay);
console.log("----------------");
console.log(tID.processTransaction());
console.log("----------------" + "\n");
console.log("----------------");
console.log(tID_2.processTransaction());
console.log("----------------" + "\n");
