## Closures

```js
function greet() {
  var firstName = 'Nicole'
  function displayName() {
    console.log(firstName)
  }
  displayName()
}
greet()
```

> Reviewing Closures again to have a better unerstanding standing of it because repetition for me really helps!
- In this function, I assigned my name to a variable firstName, inside of the greet function. Inside of the greet function is another function called displayName. 
- The function's job is to log firstName, but wait, firstName is declared in the outer function! No worries because a closure is a function that has reference to its outer/lexical enviroment! Therefore, it sees the declared variable firstName! 
- All I have to do is invoke displayName and outside of the inner function, I will invoke greet() and voila, "Nicole" will appear! Yay! 

```js
function greet() {
  var firstName = 'Nicole'
  function displayName() {
    console.log(firstName)
  }
  return displayName;
}
var createGreeting = greet();
createGreeting()
```

> This will work as well and log 'Nicole'