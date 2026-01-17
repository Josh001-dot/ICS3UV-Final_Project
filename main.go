package main

import (
	"bufio"
	"fmt"
	"math/rand"
	"os"
	"strconv"
	"strings"
	"time"
)

// Question struct
type Question struct {
	question string
	options  []string
	answer   int // index of correct option
}

func main() {
	// Seed random for shuffling
	rand.Seed(time.Now().UnixNano())

	// Question bank (10 questions)
	questions := []Question{
		{"What is 2 + 2?", []string{"1", "2", "3", "4"}, 3},
		{"Which language is used for web apps?", []string{"Python", "TypeScript", "C", "Java"}, 1},
		{"What is the capital of Canada?", []string{"Toronto", "Ottawa", "Vancouver", "Montreal"}, 1},
		{"What color do you get by mixing red and white?", []string{"Pink", "Purple", "Orange", "Brown"}, 0},
		{"Which planet is known as the Red Planet?", []string{"Earth", "Mars", "Venus", "Jupiter"}, 1},
		{"What is 5 * 6?", []string{"11", "30", "25", "56"}, 1},
		{"Which ocean is the largest?", []string{"Atlantic", "Pacific", "Indian", "Arctic"}, 1},
		{"Who wrote Hamlet?", []string{"Shakespeare", "Hemingway", "Tolkien", "Orwell"}, 0},
		{"Which element has the symbol O?", []string{"Gold", "Oxygen", "Iron", "Hydrogen"}, 1},
		{"What is the freezing point of water in °C?", []string{"0", "32", "-1", "100"}, 0},
	}

	// Shuffle questions
	rand.Shuffle(len(questions), func(i, j int) {
		questions[i], questions[j] = questions[j], questions[i]
	})

	score := 0
	reader := bufio.NewReader(os.Stdin)

	fmt.Println("Welcome to the 10-Question Quiz!")
	fmt.Println("Type the number of your answer and press Enter.\n")

	// Run quiz
	for i, q := range questions {
		fmt.Printf("Question %d: %s\n", i+1, q.question)

		for idx, opt := range q.options {
			fmt.Printf("%d. %s\n", idx+1, opt)
		}

		for {
			fmt.Print("Your answer: ")
			input, _ := reader.ReadString('\n')
			input = strings.TrimSpace(input)

			userAnswer, err := strconv.Atoi(input)
			if err != nil || userAnswer < 1 || userAnswer > len(q.options) {
				fmt.Println("Invalid input! Please enter a valid option number.")
				continue
			}

			if userAnswer-1 == q.answer {
				fmt.Println("Correct!\n")
				score++
			} else {
				fmt.Printf("Incorrect! The correct answer was: %s\n\n", q.options[q.answer])
			}
			break
		}
	}

	// Final results
	fmt.Printf("Quiz finished! Your total score is: %d / %d\n", score, len(questions))

	if score == len(questions) {
		fmt.Println("Excellent!")
	} else if score >= len(questions)/2 {
		fmt.Println("Good job!")
	} else {
		fmt.Println("Try again next time!")
	}
}
