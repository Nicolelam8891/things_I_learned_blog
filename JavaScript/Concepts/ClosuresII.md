## Another Closure example

```js 
function greet(firstName) {
  function displayName() { // The inner function `displayName` references `firstName`
    console.log(firstName) //`firstname` variable is set to "Alice"
  }
  return displayName //greet returs `displayName` function and we assign it to myClosure
}
const myClosure = greet("Alice") //call greet with the argument "Alice"
myClosure(); //output: "Alice"
```

> Even though `greet` has finished execution, `firstName` is still accessible when we call myClosure(), because of the closure. Due to this, "Alice" is logged to the console. 