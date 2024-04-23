## Return Statement

In React, the return statement in a component is used to specify what the component should render. How I would describe what the user iterface should look like when the component is displayed

```js
function PatientCard(props) {
  return (
    <div class="patient-card">
      <h1>{props.name}</h1>
      <p>Age: {props.age}</p>
    </div>
  )
}
```
> What about in Vanilla JS?
- The return statement is used to exit a function and optionally pass back a value where the function was called
- Determines what a function outputs and ends its execution

```js
function sum(a, b) {
  reutrn a + b
}
  let result = sum(5,3) // result = 8
```

The `return` statement ends the function's execution and specifies that the sum of 'A' and 'B' should be sent back to wherever the function was called. The result receives the value returned by sum(5,3), which is 8.