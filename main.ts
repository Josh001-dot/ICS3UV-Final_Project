let score: number = 0;

const q = {
  question: "Which language is used for web apps?",
  options: ["Python", "TypeScript", "C", "Java"],
  correctAnswer: 1
};

const userInput = "abc"; // invalid input
const userAnswer = Number(userInput) - 1;

if (isNaN(userAnswer) || userAnswer < 0 || userAnswer > 3) {
  alert("Invalid input! Please enter a valid option number.");
} else if (userAnswer === q.correctAnswer) {
  alert("Correct!");
  score++;
} else {
  alert("Incorrect! Correct answer: " + q.options[q.correctAnswer]);
}

console.log("Score: " + score); // Should still be 0
