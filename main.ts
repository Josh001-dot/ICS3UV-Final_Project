// For interactive browser-based quiz
let score = 0;

// Sample question
const question1 = {
  question: "What is 2 + 2?",
  options: ["1", "2", "3", "4"],
  correctAnswer: 3
};

// Ask the question using prompt
const userInput1 = prompt(
  `${question1.question}\n1) ${question1.options[0]}\n2) ${question1.options[1]}\n3) ${question1.options[2]}\n4) ${question1.options[3]}`
);

const userAnswer1 = Number(userInput1) - 1;

if (isNaN(userAnswer1) || userAnswer1 < 0 || userAnswer1 > 3) {
  alert("Invalid input! Please enter a number from 1 to 4.");
} else if (userAnswer1 === question1.correctAnswer) {
  alert("Correct!");
  score++;
} else {
  alert("Incorrect! Correct answer: " + question1.options[question1.correctAnswer]);
}

alert("Score: " + score);
