#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "enter firstnumber", type: "number", name: "firstnumber" },
  { message: "enter secondnumber", type: "number", name: "secondnumber" },
  {
    message: "select one of the operators to perform operation",
    type: "list",
    name: "operators",
    choices: ["addition", "substraction", "multiplication", "division",],
  },
]);


if (answer.operators === "addition") {
    console.log(answer.firstnumber + answer.secondnumber);
} else if (answer.operators === "substraction") {
  console.log(answer.firstnumber - answer.secondnumber);
} else if (answer.operators === "multiplication") {
  console.log(answer.firstnumber * answer.secondnumber);
} else if (answer.operators === "division") {
  console.log(answer.firstnumber / answer.secondnumber);
} else {
  console.log("please select valid operator")
}