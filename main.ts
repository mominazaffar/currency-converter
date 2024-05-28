#! usr/bin/env node

import inquirer from "inquirer";
const currency: any = {
  USD: 1, //base currency
  EUR: 0.92,
  GBP: 0.78,
  INR: 83.16,
  PKR: 278,
};

let user_answer = await inquirer.prompt([
  {
    name: "from",
    message: "Enter From currency",
    type: "list",
    choices: ["USD", "EUR", "GBP", "INR", "PKR"],
  },
  {
    name: "To",
    message: "Enter To currency",
    type: "list",
    choices: ["USD", "EUR", "GBP", "INR", "PKR"],
  },
  {
    name: "amount",
    message: "Enter your Amount",
    type: "number",
  },
]);
let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.To];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
