let account_name = "laiba";
let account_name1 = prompt("Enter Account Name");
let password = "abc123";
let password1 = prompt("Enter your password");
let total_balance1 = 50000;
let total_balance = "Rs. 50000";

if(account_name1 == account_name && password1 ==  password){

  console.log("Total balance = " , total_balance );
  
  let action = prompt("Do you want to deposit or withdraw cash");

if(action === "deposit"){

  let d_value = ( parseInt(prompt("Enter amount")));
  console.log("Total balance: " , total_balance1 + d_value);
}

else if (action === "withdraw") {
  
  let w_value =   ( parseInt(prompt("Enter amount")));

if(w_value > total_balance1){

    console.log("Insufficient balance in your account")
  }

  else{

  console.log("Total balance: " , total_balance1 - w_value);
  }
}

else{

  console.log("Invalid entry")
}
}

else{

  console.log("Incorrect username or password")
}
