#! usr/bin/env node
import inquirer from "inquirer";
console.log("Wellcome to CodeWithAhmed - CLI Number Guessing Game");
const randomNumber = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "Enter your guess number(Number Limit from 1 to 5):",
    },
]);
if (answer.userGuessNumber === randomNumber) {
    console.log("Congratulations ! You guess a correct number.");
}
else {
    console.log("Sorry, You guess a wrong number");
}
