/* 
SCOPE OF VAR

What I have learned:
1. Scope means where these variables are avail for use, var declarations are globally scoped or function/locally scoped. 
2. When var variable is outside of a fucnion, the scope is global.
  a. The variable that is declared with var outside of a function block is available for use. 
3. Var is function scoped when it is declared within a function 
  a. It can only be accessed within that function 
*/

var favDrink = "Coffee"; //globally scoped, exists outside of a function 

function newFunction() {
  var favCafeDrink = "Cortado" //function scoped. Cannot access the variable favCafeDrink outside of the function 
}
console.log(favCafeDrink); //this will say favCafeDrink is not defined since favCafeDrink is not avail outside of the function

/* HOISTING OF VAR

What I have learned: 
1. hositing is a JS mechanism where variables and function declarations are moved to the TOP of their scope before code execution
*/

//Example 1
const moo = mooLikeACow();

const mooLikeACow = () => {
  return 'Moo!'
}
console.log('Animal Sound:', moo) //cannot access mooLikeACow before initialization. The function will not be hoisted. 

//Example 2
const mooLikeACow = () => {
  return 'Moo!'
}
const moo = mooLikeACow();
console.log('Animal Sound:', moo) //Animal Sound: Moo!

//Example 3 with var
var moo = mooLikeACow();

function mooLikeACow() {
  return 'Moo!';
} 
console.log('Animal Sound:', moo);

//this works because of hoisting
//with function declarations, the entire function is hosited to the top of it's scope before code execution. 
//you can call a function before it's defined in the code. 
console.log(sayHello()); // Outputs: "Hello!"

function sayHello() {
  return "Hello!";
}

//function expressions, are not hoisted to the top. 
//if you use function expression, the variable name is hoisted but the functions definition is not. 
//you cannot call the function before the point at which it's defined in the code

console.log(sayGoodbye()); // sayGoodbye is not a function

var sayGoodbye = function() {
  return "Goodbye!";
};

