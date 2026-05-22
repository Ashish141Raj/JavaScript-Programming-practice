/**
9. Login Authentication (Hard)

Create a login system:

Correct username = "admin"
Correct password = "12345"

If both are correct:

Print "Login Successful"

Else:

Print "Invalid Credentials"

Also give 3 attempts using loops.
*/

const user = require("prompt-sync")();

const correct_user = "admin";
const correct_psw  = "12345";

let Success = false;

for(attempt = 1; attempt <= 3; attempt++){

    let userName = user("Enter UserName: ");
    let password = user("Enter password: ");

    if(correct_user === userName && correct_psw === password){
        console.log("Login Successful")
        Success = true
        break;
    }else{
        console.log("Invalid Credentials")
    }
}
if(!Success){
    console.log("you cross the attempt limit! \'your Account is blocked\'")
}