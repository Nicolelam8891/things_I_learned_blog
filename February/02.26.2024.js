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

//If the same variable is defined in different scopes, there will be no error! Cool!

let greeting = "Hello, I am your nurse today"

if (true) {
  let greeting = "It is time for your medications"
  console.log(greeting) //"It is time for your medications"
}
console.log(greeting) //"Hello, I am your nurse today"

//Awesome! There is no error! This is because both instances are treated as different vaeriables...they have different scopes!
//This is why let is a better choice than var. When you use let, it is okay if you have used a name for a variable before as a variable exists only within it's scope!

//Now what happens if I change let to var? 

let greeting = "Hello, I am your nurse today"

if (true) {
  var greeting = "It is time for your medications"
  console.log(greeting) //identifier 'greeting' has already been declared
}
console.log(greeting) 

//There will be an error because var is "leaky". It will loop up and see that there is a global variable 'greeting' and will state that it has already been declared.

/*Hoisting of let
Just like var, let declarations are hoosited to the top but UNLIKE var, when you use a let variable before declaration, you will get a reference error. 

Hositing of const: const declarations can be hosited to the top but are not initialized. 

For const (and let), the declarations are indeed hoisted to the top of their block scope (not to the top of the global scope or function scope like var), they are not initialized. This lack of initialization means that they are in a "temporal dead zone" (TDZ) from the start of the block until the line where they are declared. Attempting to access a const (or let) variable before its declaration line results in a ReferenceError.

The temporal dead zone for const and let is actually a beneficial feature because it helps catch errors that arise from using a variable before it's declared. This promots better better coding practices and making the code more readable and maintainable.

Although var declarations are hoisted and initialized with undefined, making them accessible (but undefined) before their declaration, const (and let) declarations are hoisted but not initialized, making them inaccessible before their declaration and thus preventing errors that might occur due to unintended use of variables before their actual declarations. 
*/

/* 
SUMMARY:
var vs let and const

1. var declarations are globally scoped or function scoped 
2. const and let are block scoped
3. var variables can be updated & re-declared within its scope
4. let variables can be updatd BUT not re-declared
5. const variables can neither be updated nor re-declared
6. they are all hoisted to the top of their scope
  a. var variables are initialized with undefined
  b. let and const variables are not initialized
7. while var and let can be declared without being initialized, const must be initialized during declaration 
*/