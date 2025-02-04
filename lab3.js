/**
 * Dillon Robertson
 * Feb 4, Loops
 */
console.log("Dillon Robertson")
// use a loop to print from 0 to 4 --> 0 1 2 3 4
for(let n = 0; n<=4 ; n++){
    console.log(`counting = ${n}`)
}

// collect the inital value from the user
// print all even numbers between the initial value and 20
let initialvalue = parseInt(prompt("Enter a number: "))
for(initialvalue; initialvalue<=20 ; initialvalue++){
    if(initialvalue%2==0){
        console.log(initialvalue) // only print even numbers
    }
    
}

// for loop to print from 9 to 0 in a step of 3 --> 9 6 3 0 
for(let n = 9; n>=0 ; n-=3 ){
    console.log(n)
}

// set up a list of animals
let animals = ["fish","turtle","dog"]
for(let index=0; index<animals.length; index++){
    console.log(animals[index])
}
// set up list of numbers
let numbers = [5, -3, 10, -9, 2]
let counternegative = 0
for(let index = 0; index<numbers.length ; index++){
    if(numbers[index]<0){
        counternegative++
    }
}
console.log(`There is ${counternegative} negative number/s in list 'numbers'`)
let username = "Kooper"
let counter_e = 0;
for(let index = 0; index<username.length; index++){
    // console.log(username[index])
    // find the total number of letter 'e' in username
     if(username[index]==='e'){
        counter_e++
     }
}
console.log(`There is/are ${counter_e} letter e in 'username'`)
console.log(`num`)
let num =[-3, 10, 0, 8, -9, 5, -2, 8, 6, -1]
let sumnegative = 0
for(let index = 0; index<numbers.length ; index++){
    if(num[index][-3, -9, -2, -1]>0){
        sumnegative++
    }
}
let number =[-3, 10, 0, 8, -9, 5, -2, 8, 6, -1]
let sumpositive = 0
for(let index = 0; index<numbers.length ; index++){
    if(number[index][-3, -9, -2, -1]>0){
        sumpositive++
    }
}