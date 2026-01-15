/**
 * @author Joshua Adeyemi
 * @version 1.0.0
 * @date 2025-01-14
 * @fileoverview This program keeps track of car stats.
 */

// Question interface
interface Question {
  question: string;
  options: string[];
  answer: number; // index of the correct option
}

// Question bank
const questions: Question[] = [
  {
    question: "What is 2 + 2?",
    options: ["1", "2", "3", "4"],
    answer: 3
  },
  {
    question: "Which language is used for web apps?",
    options: ["Python", "TypeScript", "C", "Java"],
    answer: 1
  },
  {
    question: "What is the capital of Canada?",
    options: ["Toronto", "Ottawa", "Vancouver", "Montreal"],
    answer: 1
  }
];

// Import readline for user input
import * as readline from 'readline';

// Create interface for input/output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let score: number = 0; // Initialize score

// Function to ask a question
function askQuestion(q: Question, callback: () => void) {
  console.log("\n" + q.question);
  q.options.forEach((option, index) => {
    console.log(`${index + 1}. ${option}`);
  });

  rl.question("Enter the number of your answer: ", (input) => {
    const userChoice = parseInt(input);

    // Error handling for invalid input
    if (isNaN(userChoice) || userChoice < 1 || userChoice > q.options.length) {
      console.log("Invalid input! Please enter a valid option number.");
      askQuestion(q, callback); // Ask again
    } else {
      if (userChoice - 1 === q.answer) {
        console.log("Correct!");
        score++;
      } else {
        console.log(`Incorrect! The correct answer was: ${q.options[q.answer]}`);
      }
      callback();
    }
  });
}

// Function to run the quiz
function runQuiz(index: number = 0) {
  if (index < questions.length) {
    askQuestion(questions[index], () => runQuiz(index + 1));
  } else {
    console.log(`\nQuiz finished! Your total score is: ${score} / ${questions.length}`);

    // Optional: give feedback based on score
    if (score === questions.length) {
      console.log("Excellent!");
    } else if (score >= questions.length / 2) {
      console.log("Good job!");
    } else {
      console.log("Try again next time!");
    }

    rl.close();
  }
}

// Start the game
console.log("Welcome to the Simple Quiz Game!");
console.log("Answer the questions by typing the number of your choice.");
runQuiz();
