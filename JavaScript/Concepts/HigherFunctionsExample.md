## Higher-order functions review

```js
function greet() {
  var firstName = 'Nicole';
  function displayName() {
    console.log(firstName);
  }
  return displayName; // Return the displayName function itself
}
var createGreeting = greet(); // greet returns displayName, but does not execute it
createGreeting(); // Now calling displayName, outputs: "Nicole"
```

> A higher-order function is a function that can take another function as an argument or return a function as a result, or both.
- In this example, `greet` is a higher-order function because it returns another function `displayName`. The returned function `displayName` doens't take a function as an artgument ore turn another function; therefore, it is not a higher-order function. 
- It is actually the `greet` function that qualifies as a higher-order function due to the return of `displayName`. 

👆 Higher-Order Function
- greet is a higher-order function because it returns another function (displayName). 
👆 Closure
- When createGreeting() is invoked, it demonstrates a closure because displayName retains access to firstName from greet's scope
- closures allow functions to hold onto their lexical scope even when executed outside of their original context