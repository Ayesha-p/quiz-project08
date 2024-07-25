import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { name: "q1", message: "What is the capital of France?", type: "list", choices: ["Berlin", "London", "Paris", "Rome"] },
    { name: "q2", message: "What is 2 + 2?", type: "list", choices: ["3", "4", "5", "6"] },
    { name: "q3", message: "Which planet is known as the Red Planet?", type: "list", choices: ["Earth", "Mars", "Jupiter", "Saturn"] }
]);
let score = 0;
if (answer.q1 === "Paris") {
    score++;
}
if (answer.q2 === "4") {
    score++;
}
if (answer.q3 === "Mars") {
    score++;
}
console.log(`You scored ${score} out of 3`);
