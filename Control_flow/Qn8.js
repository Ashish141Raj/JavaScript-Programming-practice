/*
8. ATM Withdrawal System (Hard)

Take:

account balance
withdrawal amount

Conditions:

Amount must be multiple of 100
Amount should not exceed balance
Minimum balance after withdrawal should be 500

Print appropriate messages.
*/

const userInput = require("prompt-sync")();

let account_balance = Number(userInput("Enter account_balance: "));
let withdrawal_amount = Number(userInput("Enter Withdrawal_ Amount: "));

if(withdrawal_amount % 100 !== 0){
    console.log("Amount must be multiple of 100");
}else if(withdrawal_amount > account_balance){
    console.log("Insufficient Balance");
}else if((account_balance - withdrawal_amount) < 500){
    console.log("Minimum Balnce should be 500.");
}else{
    console.log("Withdrawal Successful");
    console.log("Remaining Balance: ",account_balance);
}