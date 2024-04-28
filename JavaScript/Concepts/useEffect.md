## useEffect hook

> A built-in react hook that allows me to perform side effects in function components
- Example of side effects: data fetching, subscriptions, or manually changing the DOM

1. takes in 2 arguments
- function that contains the code wenwant to run as a side effect
- dependency array

2. When this runs: 
- runs after every completed render
- if a dependency is provided, it runs after every update, if any of the dependencies change
- if we pass an empty array, `[]` as the 2nd argument, it runs only once after the initial render

