## Counter II problem 

```js
var createCounter = function(init) {
    let counter = init

    let increment = function() {
        counter++ 
        return counter;
    }

     let decrement = function() {
        counter--
        return counter;
    }

        let reset = function() {
        counter = init
        return counter;
    }

    return {
        increment, 
        decrement, 
        reset
    }
};
```

> At the end of the `createCounter` function here, I am returing an object. 
- Object contains 3 properties, `increment`, `decrement`, and `reset`. Each of these are a function. 
- This pattern is known as the Module pattern
a. this pattern is commonly used in JS to encapsulate private data & expose a public API
- Each of these properties is set to the corresponding function defined inside `createCounter`
THis will allow the caller to interact with the `counter` without it directly accessing the `counter` variable itself. 
- This encapsulation ensures that the `counter` can only be modified through these 3 functions, providing control over how the `counter` is accessed & mutated

This is the structure of the returned object: 
```js
{
  increment: incrementFunction,
  decrement: decrementFunction,
  reset: resetFunction
}
```

> In this structure, `incrementFunction`, `decrementFunction`, and `resetFunction` are placeholders for the actual functions that are defined inside of `createCounter`. When each of these functions are called, it will operate on the `counter` variable and return it's updated value. 

Overall: I am returning an object from `createCounter`. This object's properties are the `increment`, `decrement`, and `reset` functions, which allows the caller to interact with the `counter` in a controlled manner. This is a good way to create encapsulated modules with private data and a public interface. 