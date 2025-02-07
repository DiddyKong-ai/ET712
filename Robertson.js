/*
Homework 1: control flow and loops
Student’s name: Dillon
*/

console.log("\n------ Program 1: conditional statement -----")
// Ask the user to enter something using the prompt dialog
let userInput = prompt("Please enter something:");

// Check if the user clicked "Cancel"
if (userInput === null) {
    console.log("Null and void!");
}
// Check if the input is empty (user clicked OK without entering anything)
else if (userInput === "") {
    console.log("Your answer was blank!");
}
// Check if the input is zero
else if (userInput === "0") {
    console.log("Yin and Yang!");
}
// Check if the input is a positive number
else if (Number(userInput) > 0) {
    console.log("Think positively!");
}
// Check if the input is a negative number
else if (Number(userInput) < 0) {
    console.log("Never have negative balance!");
}
// If the input is not a number and not any other special case
else {
    console.log("Invalid input.");
}


console.log("\n------ Program 2: for loop and nested conditional statement -----")
// Declare an empty array to store the numbers
let numbers = [];

// Use a for loop to collect 10 numbers from the user
for (let i = 0; i < 10; i++) {
    let userInput = prompt(`Enter number ${i + 1}:`);
    // Convert the input to a number and store it in the array
    numbers.push(Number(userInput));
}

// Initialize counters for multiples of 3, 5, and 7
let multiplesOf3 = 0;
let multiplesOf5 = 0;
let multiplesOf7 = 0;

// Use a loop to check each number and count multiples of 3, 5, and 7
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 3 === 0) {
        multiplesOf3++;
    }
    if (numbers[i] % 5 === 0) {
        multiplesOf5++;
    }
    if (numbers[i] % 7 === 0) {
        multiplesOf7++;
    }
}

// Display the results in the console
console.log(`${multiplesOf3} numbers are multiples of 3`);
console.log(`${multiplesOf5} numbers are multiples of 5`);
console.log(`${multiplesOf7} numbers are multiples of 7`);
