## Higher Functions

> a function that takes one or more functions as arguments or returns a function, or both
- i.e: higher order functions : map & reduce

> map takes in an array of values and applies a transformation to each of the values in the array
- 🚫 mutates original array
- ✅ transform an array of data into a new array with a different structure

```js

const nurses = [
  {firstName: 'Nicole', lastName: 'Lam', specialty: 'ENT'}, 
  {firstName: 'Tina', lastName: 'Deo', specialty: 'Family Medicine'}
]

const result = nurses.map(nurse => nurse.firstName + ' ' + nurse.lastName);
console.log(result); //['Nicole Lam', 'Tina Deo']

const specialty = nurses.map(nurse => nurse.specialty);
console.log(specialty); //['ENT', 'Family Medicine']
```

```js
//Callback function that will be passed as a parameter in the higher order function 
const callbackFunction1 = () => {
  console.log('I am a callback function 1');
}

const callbackFunction2 = () => {
  console.log('I am a callback function 2');
}

//higher order function 
const higherOrderFunction = (callbackFunction) => {
  console.log('I am a higher function')
  callbackFunction()
}

higherOrderFunction(callbackFunction1)
higherOrderFunction(callbackFunction2)
```
-in the above code, higherOrderFunction() is a higher order function because we are passing a callback function as a parameter to it! 

1. higherOrderFunction is invoked with callbackFunction as its argument.
2. inside higherOrderFunction, it logs 'I am a higher function' to the console.
3. it calls the function passed to it (callbackFunction), which logs 'I am a callback function' to the console.

