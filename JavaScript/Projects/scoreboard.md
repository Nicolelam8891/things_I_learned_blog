## Project ScoreBoard

> I am trying to implement a scoreboard for my rock paper scissors app I am trying to create for my daughter!

In the desired component: I will make sure that the score start off at 0. 
```js 
  const [playerScore, setPlayerScore] = useState(0)
  const [computerScore, setComputerScore] = useState(0)

    const updateScores = (winner) => {
      console.log("winner", winner) // will display a string of either 'player' or 'computer'
    if (winner === 'player') {
      setPlayerScore(prevScore => prevScore + 1) 
    } else if (winner === 'computer') {
      setComputerScore(prevScore => prevScore + 1)
    }
  }
```
