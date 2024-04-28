## Why did I chose to keep the scoreboard in App.js for my rock, paper, scissors project?

```js
  const [playerScore, setPlayerScore] = useState(0)
  const [computerScore, setComputerScore] = useState(0)

  const updateScores = (winner) => {
    console.log('winner', winner)
    if (winner === 'player') {
      setPlayerScore(prevScore => prevScore + 1) 
    } else if (winner === 'computer') {
      setComputerScore(prevScore => prevScore + 1)
    }
  }
```

> I kept the scoring in app because that is the scorce of truth
- I want to keep the score at the top level. The app level is easier to share & synchronize the state, across different parts of  my app, that might need access to the score. 
- By centralizing state, changes to the score can be efficiently propagated down to other components that depend on this state.
- I want to avoid the complexity and potential errors of having multiple sources of truth or having to manage complex state synchronization between sibling components

> Top-down data flow:
- The state can be passed down to child components via props.
-it makes the data flow predictable & debugging easier
-this keeps other components focused on their primary focus, and purpose, which will let it handle the game's logic and UI, and make it more reusable. 