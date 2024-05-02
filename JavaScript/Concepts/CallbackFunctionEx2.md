## 

```js
const displayMessage = () => {
  console.log("Hello, this message appears after 3 seconds")
}
setTimeout(displayMessage, 3000)
```

> setTimeout is used to execute the callback function after the 3 seconds. This schedules the `displayMessage` function run after 3000 milliseconds, which is 3 seconds
> This is important because we are passing the function as an object and not executing it right away
> The 2nd argument specifies the delay in miulliseconds before the callback function should be executed
> It is executed after a specific time delay. setTimeout is async and it does not block the execution of subsequent JS code while it waits for the timer to complete. 