#!/usr/bin/env node

// npx saif-number-guessing-game

import inquirer from "inquirer";

const guessNumber = Math.floor(Math.random() * 20);

const number = await inquirer.prompt([
    
    {
        name : "num1",
        type : "number",
        message : "Guess a number from 1-20 correctly and win $100"
    }

]);

if(number.num1 === guessNumber) {
    console.log("Congrats buddy! you guessed the correct number.");
} else {
    console.log("You lose! please try again.");
};