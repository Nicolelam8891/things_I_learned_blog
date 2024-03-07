## SCOPE OF VAR
- Date : 02.25.2024
- Tags: #javascript #concepts #var

What I have learned:
1. Scope means where these variables are avail for use, var declarations are globally scoped or function/locally scoped. 
2. When var variable is outside of a fucnion, the scope is global.
  a. The variable that is declared with var outside of a function block is available for use. 
3. Var is function scoped when it is declared within a function 
  a. It can only be accessed within that function 

```js
var favDrink = "Coffee"; //globally scoped, exists outside of a function 

function newFunction() {
  var favCafeDrink = "Cortado" //function scoped. Cannot access the variable favCafeDrink outside of the function 
}
console.log(favCafeDrink); //this will say favCafeDrink is not defined since favCafeDrink is not avail outside of the function
```

## HOISTING OF VAR
- Date : 02.25.2024
- Tags: #javascript #concepts #var

What I have learned: 
1. hositing is a JS mechanism where variables and function declarations are moved to the TOP of their scope before code execution

```js
const moo = mooLikeACow();

const mooLikeACow = () => {
  return 'Moo!'
}
console.log('Animal Sound:', moo) //cannot access mooLikeACow before initialization. The function will not be hoisted. 
```

```js
const mooLikeACow = () => {
  return 'Moo!'
}
const moo = mooLikeACow();
console.log('Animal Sound:', moo) //Animal Sound: Moo!

var moo = mooLikeACow();

function mooLikeACow() {
  return 'Moo!';
} 
console.log('Animal Sound:', moo);
```

This works because of hoisting
  1. with function declarations, the entire function is hosited to the top of it's scope before code execution. 
  2. you can call a function before it's defined in the code. 
  3. console.log(sayHello()); // Outputs: "Hello!"

```js
function sayHello() {
  return "Hello!";
}
```

1. function expressions, are not hoisted to the top. 
2. if you use function expression, the variable name is hoisted but the functions definition is not. 
3. you cannot call the function before the point at which it's defined in the code
4. console.log(sayGoodbye()); // sayGoodbye is not a function

```js
var sayGoodbye = function() {
  return "Goodbye!";
};
```

