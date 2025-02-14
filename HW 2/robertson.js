/*
Dillon Robertson
Homework 2 - functions, loops, and conditional statement
*/

console.log(`Excercise 1`)
function name_counting(names) {
    let count = 0;
  
    for (let i = 0; i < names.length; i++) {
      if (names[i].length < 5) {
        count++;
      }
    }
    
    return count;
  }
  
  let names = ["Ann", "Peter", "Patricia", "Sam", "Katerina"];
  console.log(name_counting(names));  // Output: 3

  
  console.log(`Excercise 2`)
  function checkNum() {
    let number;
  
    while (true) {
      number = prompt("Please enter a number:");
      
      // Check if the input is a valid number
      if (!isNaN(number) && number !== "") {
        number = Number(number);  // Convert the input to a number
        return number % 2 === 0;   // Return true if even, false if odd
      } else {
        alert("Invalid input! Please enter a valid number.");
      }
    }
  }
  
  console.log(checkNum());  // Will return true or false based on user input
  