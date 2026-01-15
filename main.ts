/**
 * @author Joshua Adeyemi
 * @version 1.0.0
 * @date 2025-01-14
 * @fileoverview Randomized multiple-choice quiz program
 */

// Question structure
type Question = {
  question: string;
  options: string[];
  correctAnswer: number; // index (0–3)
};

// Question bank (10 questions)
const questions: Question[] = [
  {
    question: "What is 2 + 2?",
    options: ["1", "2", "3", "4"],
    correctAnswer: 3
  },
  {
    question: "What is the capital of Canada?",
    options: ["Toronto", "Ottawa", "Vancouver", "Montreal"],
    correctAnswer: 1
  },
  {
    question: "Which language is used to style web pages?",
    options: ["HTML", "Python", "CSS", "C++"],
    correctAnswer: 2
  },
  {
    question: "Which number is even?",
    options: ["3", "5", "7", "8"],
    correctAnswer: 3
  },
  {
    question: "What does CPU stand for?",
    options: [
      "Central Processing Unit",
      "Computer Power Unit",
      "Central Program Utility",
      "Control Processing Unit"
    ],
    correctAnswer: 0
  },
  {
    question: "Which one is a loop?",
    options: ["if", "switch", "for", "else"],
    correctAnswer: 2
  },
  {
    question: "What symbol is used for comments in TypeScript?",
    options: ["//", "##", "<!-- -->", "**"],
    correctAnswer: 0
  },
  {
    question: "Which one is an input device?",
    options: ["Monitor", "Keyboard", "Speaker", "Printer"],
    correctAnswer: 1
  },
  {
    question: "What is 10 × 5?",
    options: ["15", "50", "100", "5"],
    correctAnswer: 1
  },
  {
    question: "Which one stores multiple values?",
    options: ["Variable", "Loop", "Array", "Function"],
    correctAnswer: 2
  }
];

// Shuffle questions (Fisher-Yates)
for (let i = questions.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  const temp = questions[i];
  questions[i] = questions[j];
  questions[j] = temp;
}

// Quiz logic
let score: number = 0;

for (let i = 0; i < questions.length; i++) {
  const q = questions[i];

  let message =
    q.question + "\n\n" +
    "1) " + q.options[0] + "\n" +
    "2) " + q.options[1] + "\n" +
    "3) " + q.options[2] + "\n" +
    "4) " + q.options[3];

  const userInput = prompt(message);
  const userAnswer = Number(userInput) - 1;

  if (userAnswer === q.correctAnswer) {
    alert("Correct!");
    score++;
  } else {
    alert("Incorrect! Correct answer: " + q.options[q.correctAnswer]);
  }
}

// Final output
alert("Quiz complete!\nYour score: " + score + " / " + questions.length);
