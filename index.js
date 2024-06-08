#! /usr/bin/env node
import inquirer from "inquirer";
console.log('\t---welcome to my Quiz project---');
let quiz = await inquirer.prompt([
    {
        name: "question_1",
        type: "list",
        message: "\tQ1. Which is easiest language in world?",
        choices: ["a. HTML", "b. CSS", "c. Javascript", "d. Python"]
    },
    {
        name: "question_2",
        type: "list",
        message: "\twe can compile typescript file to javascript?",
        choices: ["a. Using npm", "b. using tsc", "c. a & b", "d. none of them"]
    },
    {
        name: "question_3",
        type: "list",
        message: "\twhat should be extension for typscript file?",
        choices: ["a. .ts", "b. .html", "c. .js", "d. .py"]
    },
    {
        name: "question_4",
        type: "list",
        message: "\tHow we can check the version of Node Js?",
        choices: ["a. tsc -v", "b. node ----v", "c.  node -v ", "d. none of them"]
    },
    {
        name: "question_5",
        type: "list",
        message: "\twhich language should we use for behavior of web?",
        choices: ["a. CSS", "b. HTML", "c. typscript", "d. none of them"]
    }
]);
let score = 0;
switch (quiz.question_1) {
    case "a. HTML":
        console.log("\t1. Correct Answer!");
        ++score;
        break;
    default:
        console.log("\t1. wrong Answer!");
}
switch (quiz.question_2) {
    case "b. using tsc":
        console.log("\t2. Correct Answer!");
        ++score;
        break;
    default:
        console.log("\t2. wrong Answer!");
}
switch (quiz.question_3) {
    case "a. .ts":
        console.log("\t3. Correct Answer!");
        ++score;
        break;
    default:
        console.log("\t3. wrong Answer!");
}
switch (quiz.question_4) {
    case "c.  node -v ":
        console.log("\t4. Correct Answer!");
        ++score;
        break;
    default:
        console.log("\t4. wrong Answer!");
}
switch (quiz.question_5) {
    case "c. typscript":
        console.log("\t5. Correct Answer!");
        ++score;
        break;
    default:
        console.log("\t5. wrong Answer!");
}
console.log(`\tYour score is ${score}`);
