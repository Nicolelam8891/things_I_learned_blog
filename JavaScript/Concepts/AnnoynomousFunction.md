## Annoynomous Functions

```js
const mooLikeACow = function() {
  return `Moo!`
}
mooLikeACow() //Moo!
```
> 
- A function that has no name associated with it.
- Not accessible after initial creation 
- Only access by a variable it is stored in as a function as a value 

## What is it good for? 
1. allows you to define a function in a single line of code
2. concise, easier to read for a simple function that is only used once
3. will not run into naming conflicts with ohter functions or variables in codebase
4. annoynomous functions can help in creating closures which encapsulate variables within their scope
5. useful for maintaining state in a secure way
- enclosed variables are only accessible to the annoynomous function and not to the rest of the code

## Cons
- it is important to use it judiciously, overuse can lead to code that is harder to test & debug
