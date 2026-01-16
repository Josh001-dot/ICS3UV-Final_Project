/**
 * Author: Joshua Adeyemi
 * Version: 1.0.0
 * Date: 2026-01-16
 * Fileoverview: Playable multiple-choice quiz in the browser
 */

interface Question {
  question: string;
  options: string[];
  answer: number; // index of correct option
}

// Question bank (10 questions)
const questions: Question[] = [
  { question: "What is 2 + 2?", options: ["1", "2", "3", "4"], answer: 3 },
  { question: "Which language is used for web apps?", options: ["Python", "TypeScript", "C", "Java"], answer: 1 },
  { question: "What is the capital of Canada?", options: ["Toronto", "Ottawa", "Vancouver", "Montreal"], answer: 1 },
  { question: "What color do you get by mixing red and white?", options: ["Pink", "Purple", "Orange", "Brown"], answer: 0 },
  { question: "Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Venus", "Jupiter"], answer: 1 },
  { question: "What is 5 * 6?", options: ["11", "30", "25", "56"], answer: 1 },
  { question: "Which ocean is the largest?", options: ["Atlantic", "Pacific", "Indian", "Arctic"], answer: 1 },
  { question: "Who wrote Hamlet?", options: ["Shakespeare", "Hemingway", "Tolkien", "Orwell"], answer: 0 },
  { question: "Which element has the symbol O?", options: ["Gold", "Oxygen", "Iron", "Hydrogen"], answer: 1 },
  { question: "What is the freezing point of water in °C?", options: ["0", "32", "-1", "100"], answer: 0 },
];

// Shuffle questions so order is random each time
function shuffleArray<T>(arr: T[]): T[] {
  return arr.sort(() => Math.random() - 0.5);
}

const shuffledQuestions = shuffleArray(questions);

let score = 0;

// Function to play the quiz
function runQuiz(index: number = 0) {
  if (index >= shuffledQuestions.length) {
    alert(`Quiz finished! Your total score is: ${score} / ${shuffledQuestions.length}`);
    if (score === shuffledQuestions.length) alert("Excellent!");
    else if (score >= shuffledQuestions.length / 2) alert("Good job!");
    else alert("Try again next time!");
    return;
  }

  const q = shuffledQuestions[index];
  let message = `${q.question}\n`;
  q.options.forEach((opt, idx) => message += `${idx + 1}. ${opt}\n`);

  let userInput = prompt(message);
  if (userInput === null) return; // User canceled

  const userAnswer = parseInt(userInput) - 1;

  if (isNaN(userAnswer) || userAnswer < 0 || userAnswer >= q.options.length) {
    alert("Invalid input! Please enter a number from 1 to " + q.options.length);
    runQuiz(index); // ask the same question again
  } else {
    if (userAnswer === q.answer) {
      alert("Correct!");
      score++;
    } else {
      alert(`Incorrect! The correct answer was: ${q.options[q.answer]}`);
    }
    runQuiz(index + 1); // next question
  }
}

// Start the quiz
alert("Welcome to the 10-Question Quiz!\nAnswer the questions by typing the number of your choice.");
runQuiz();
