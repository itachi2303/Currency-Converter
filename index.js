// currency converter
import inquirer from "inquirer";
import chalk from "chalk";
let ask = await inquirer.prompt([
    {
        message: "select your currency",
        type: "list",
        name: "currency",
        choices: ["USD ($)", "EURO (€)", "riyal (ر.س)", "rupee(PKR)"]
    },
    {
        message: "enter the amount u want to convert: ",
        type: "number",
        name: "amount"
    },
    {
        message: "select the currency u want to convert into",
        type: "list",
        name: "currency2",
        choices: ["USD ($)", "EURO (€)", "riyal (ر.س)", "rupee(PKR)"]
    },
]);
if (ask.currency === "USD ($)" || ask.currency2 === "PKR (PKR)") {
    console.log(chalk.green(ask.amount, "USD, will be => ", ask.amount * 277.50 + "PKR"));
}
else if (ask.currency === "PKR (PKR)" || (ask.currency2 === "USD ($)")) {
    console.log(chalk.green(ask.amount, "PKR, will be => ", ask.amount / 277.5 + "USD"));
}
else if (ask.currency === "EURO (€)" || (ask.currency2 === "PKR (PKR)")) {
    console.log(chalk.green(ask.amount, "EURO, will be => ", ask.amount * 299.51 + "PKR"));
}
else if (ask.currency === "PKR (PKR)" || (ask.currency2 === "EURO (€)")) {
    console.log(chalk.green(ask.amount, "PKR, will be => ", ask.amount / 299.51 + "EURO"));
}
else if (ask.currency === "riyal (ر.س)" || (ask.currency2 === "PKR (PKR)")) {
    console.log(chalk.green(ask.amount, "riyal, will be => ", ask.amount * 73.99 + "PKR"));
}
else if (ask.currency === "PKR (PKR)" || (ask.currency2 === "riyal (ر.س)")) {
    console.log(chalk.green(ask.amount, "PKR, will be => ", ask.amount / 73.99 + "riyal"));
}
