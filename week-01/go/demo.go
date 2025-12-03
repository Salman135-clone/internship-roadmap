package main

import "fmt"

func calculate(item int) int {
	return item % 2
}
func guessNumber() {
	var item int

	fmt.Print("Enter number to check for even and odd:")
	fmt.Scan(&item)
	result := calculate(item)
	if result == 0 {
		fmt.Println("Even Number")
	} else {
		fmt.Println("Odd Number")
	}
}

func main() {
	fmt.Println("Hello World")
	guessNumber()
}
