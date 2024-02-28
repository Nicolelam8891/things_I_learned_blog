/* 
LET and CONST

1. any code that lives inside curly braces is a block scoped. 
2. varible declared in a block with let is ONLY avail for use within that block
*/

let gretting = "Hello, I am your nurse today, how can I help?"
let patients = 5

if (patients > 3) {
  let nurseGreeting = "It's going to be a busy day, I may be behind, please be patient.";
  console.log(nurseGreeting) //this will show if there are more than 3 patients
}
console.log(nurseGreeting) //this will cause an error since nurseGreeting is inside of the block scope. It is not accessible here.

//In this case, nurseGreeting is outside of its block and will return an error because let variables are block scoped. 

//let can be updated but NOT re-declared

let greeting = "Hello, I am your nurse today"
greeting = "It's going to be a busy day, please be patient with me!"
console.log(greeting) //It's going to be a busy day, please be patient with me!

let greeting = "Hello, I am your nurse today"
let greeting = "It's going to be a busy day, please be patient with me!"
console.log(greeting) // Identifier 'greeting' has already been declared

//If the same variable is define din different scopes, there will be no error! Cool!

