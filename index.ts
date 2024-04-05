#!/usr/bin/env node
import inquirer from "inquirer";

let Conversion = {
    "PKR": {
        "USD": 0.0036,
        "GBP": 0.0037,
        "PKR": 1
    },


    /// In GBP

"GBP":{
    "USD": 1.21,
     "PKR": 350,
     "GBP": 1
},

   // In Dollars

"USD":{
    "PKR": 277.58,
    "GBP": 0.83,
    "USD": 1
},

}
    /// using  Inquirer

const answer: {
    from: "PKR" | "USD" | "GBP",
    to: "PKR" | "USD" | "GBP",

    // Datatype declared
    amount: number,
} = await inquirer.prompt([
    {
        type: "list",
        name: "from",
        choices: ["PKR", "USD", "GBP"],
        message: "Select your currency.....?"
    },
    {
        type: "list",
        name: "to",
        choices: ["PKR", "USD", "GBP"],
        message: "Select your conversion currency.....?"
    },


   ////conversion amount

{
    type: "number",
    name: "amount",
    message: "Enter Your Conversion Amount"
}
]);

const {from,to,amount}=answer;

 /// check input in given programs
 if( from && to && amount) {
    //formula

let result = Conversion[from][to] * amount ;
console.log(`Your conversion from ${from} to ${to} is ${result}`)

}else{
    /// generate error
    console.log("Invalid Input")
}













