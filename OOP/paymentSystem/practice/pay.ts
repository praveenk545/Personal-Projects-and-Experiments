abstract class PaymentMethod_1{
  protected amount:number;
  constructor(amount:number){
    this.amount=amount;
  }
  abstract paymentProcess():string;
}
class CreditCard_1 extends PaymentMethod_1{
    private cardNumber:number;
    private expiryDate:string;
    constructor(amount:number,cardNumber:number,expiryDate:string){
        super(amount);
        this.cardNumber=cardNumber;
        this.expiryDate=expiryDate;
    }
    paymentProcess(): string {
        return `Processing credit card payment of ${this.amount}. using card Number : ${this.cardNumber} `
    }
}
class PayPal_1 extends PaymentMethod_1{
    private email:string;
    constructor(amount:number,email:string){
        super(amount);
        this.email=email;
    }
    paymentProcess(): string {
        return `Processing Paypal payment of ${this.amount} from email : ${this.email}`;
    }
}
class GPay extends PaymentMethod_1{
    private myId:number;
    constructor(amount:number,id:number){
        super(amount)
        this.myId=id;
    }
  paymentProcess(): string {
      return `Processing googlepay payment of ${this.amount} from id : ${this.myId}`;
  }
}
class User_1{
  private name:string;
  private email:string;
  constructor(name:string,email:string){
  this.name=name;
  this.email=email;
  }
   paymentMake(paymentMethod:PaymentMethod_1){
    return paymentMethod.paymentProcess();
   }
}
class Transaction_1{
    private user:User_1;
    private paymenetMethod:PaymentMethod_1;
    private transactionId:string;
    constructor(user:User_1,paymentMethod:PaymentMethod_1){
        this.user=user;
        this.paymenetMethod=paymentMethod;
        this.transactionId=this.generateTransactionId()
    }
    private generateTransactionId():string{
  return `TNX`+Math.floor(Math.random()*1000000).toString()
    }
    processTransaction():string{
        const paymentMessage=this.user.paymentMake(this.paymenetMethod);

        return `Transaction ID : ${this.transactionId}\n ${paymentMessage}.`
    }
}
const user=new User_1('kumar','k@gmail.com');
const cd=new CreditCard_1(250,1232434,'12/11/2024');
const paypal=new PayPal_1(150,'k@gmail.com');
const gpay=new GPay(200,12344)
const tID=new Transaction_1(user,cd);
const tID_1=new Transaction_1(user,paypal);
const tID_2=new Transaction_1(user,gpay)
console.log("----------------")
console.log(tID.processTransaction());
console.log("----------------"+`\n`)
console.log("----------------")
console.log(tID_2.processTransaction());
console.log("----------------"+`\n`)