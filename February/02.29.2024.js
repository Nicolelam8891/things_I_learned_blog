/* CLOSURES:

* A closure is a feature in JS where an inner function has access to the outer function's variables. It has access to outer function's variables, outer function's parameters and global variables
a. It can preserve state in a functional programming context
b. What is cool about a closure is that the outer function has executed and returned the inner function, the inner function still has access to the statement parameter of the outer function 
c Important: the inner function retains access to the outer function's scope even after the outer function has completed execution.
*/

const myFavDrinks = (statement) => {
  const favDrink = (drink) => { //this function returns an inner function, creating a closure
    return statement + drink + '!'
  };
  return favDrink 
}

const firstDrink = myFavDrinks('My favorite drink: ');  //running the outer function and storing the return of the inner function to the variable, firstDrink
const secondDrink = myFavDrinks('My second favorite drink: '); //running the outer function and storing the return of the inner function to the variable, secondDrink

console.log(firstDrink('Iced Almond Latte')) //running the inner function 
console.log(secondDrink('Iced Green Tea Latte')) //running the inner function 

//this example shows how closures allow functions to have private variables. Statement variable is not accessible from the outside, inner function can access it, due to closures