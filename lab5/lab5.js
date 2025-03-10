console.log("Dillon Robertson")
const sum = function(num1,num2){
    return num1+num2
}
// calling function
console.log(sum(5,8))

// function to return the square root of a number
let squarenumber = function(n){
    return Math.pow(n,2)
}
// call function
console.log(squarenumber(5))

let greet = (username) => {
    console.log(`Welcome to JS ${username}`)
}

//call function
greet("SMG4")

function cubenumber(n){
    return Math.pow(n,3)
}
//call function
console.log(`2^3 = ${cubenumber(2)}`)
console.log(`empty^3 = ${cubenumber()}`)

nums =[-4, 8, 6, -1, 5]
let maxnum = Math.max(...nums)
console.log(maxnum)

//create an object
const car ={
    // properties
    type: "Fiat",
    model: 500,
    color:"white",
    price: 23000,

    //methods
    description:function(){
        return `${this.color} ${this.type} cost ${this.price}`
    }
}

//calling the object proprty "model"
console.log(car.model)
// calling the object method 'description'
console.log(car.description())

const hen = {
    //properties
    name: "Meggy",
    year: 2025,
    eggcount: 0,

    //method
    layanegg: function(){
        this.eggcount++
        return "EGG"
    }
}
// calling the property 'eggcount'
console.log(`${hen.name} has ${hen.eggcount} eggs`)
//calling the method
console.log(hen.layanegg())
console.log(hen.layanegg())
console.log(`${hen.name} has ${hen.eggcount} eggs`)

function yell(msg){
    try{
    console.log(msg.toUppercase().repeat(3))    
    }
    catch(e){
        console.log(`ERROR! ${e}`)
    }
    finally{
        console.log("End of function 'yell'")
    }
     
}
//calling the function
yell("help ")
yell(8)
console.log("end of example 8")

const myCalculator = {
    message: "This is a calculator.",
    side: 2,
  
    // Method to calculate area of a square
    area_square: function() {
      return Math.pow(this.side, 2);  // area = side^2
    },
  
    // Method to calculate volume of a cube
    volume_cube: function() {
      return Math.pow(this.side, 3);  // volume = side^3
    }
  };
  
  // Test the object and methods
  console.log(myCalculator.message);  // Display message
  console.log("Area of square:", myCalculator.area_square());  // Calculate area of square
  console.log("Volume of cube:", myCalculator.volume_cube());  // Calculate volume of cube
  
function divideNumbers(a, b) {
    try {
      if (b === 0) {
        throw new Error("Cannot divide by zero.");
      }
      return a / b;  // Try dividing a by b
    } catch (error) {
      return 'Error performing the division: ' + error.message;  // Return error message if exception occurs
    }
  }
  
  // Test the divideNumbers function
  console.log(divideNumbers(10, 2));  // Valid division: 10 / 2 = 5
  console.log(divideNumbers(10, 0));  // Division by zero: Error message
