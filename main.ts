// Simulating incorrect input for first question
let score: number = 0;

const q = {
  question: "What is 2 + 2?",
  options: ["1", "2", "3", "4"],
  correctAnswer: 3
};

const userInput = "1"; // user chooses wrong answer
const userAnswer = Number(userInput) - 1;

if (userAnswer === q.correctAnswer) {
  alert("Correct!");
  score++;
} else {
  alert("Incorrect! Correct answer: " + q.options[q.correctAnswer]);
}

console.log("Score: " + score); // Should be 0
