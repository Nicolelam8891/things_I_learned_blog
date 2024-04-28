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
> This is the determineWinner function inside of GameBoard component

```js
const determineWinner = (playerChoice) => {
      let computerChoice = computerResult(gameMode)

      setPlayerChoice(playerChoice);
      setComputerChoice(computerChoice);

      let rules = {}
      if (gameMode === 'classic') {
        rules = {
          bombIcon: ['shellIcon'],
          shellIcon: ['starIcon'],
          starIcon: ['bombIcon'], 
        }
       } else {
        rules = {
            //[winner: losers]
            bombIcon: ['shellIcon', 'daisy fireballIcon'],
            shellIcon: ['shellIcon', 'starIcon'],
            starIcon: ['starIcon', 'bombIcon'],
            coinIcon: ['shellIcon', 'starIcon'],
            daisyFireballIcon: ['coinIcon', 'bombIcon']
          }
        }      
      if (playerChoice === computerChoice) {
        console.log(`It's a draw!`);
        setWinner('draw')
      } else if (rules[playerChoice].includes(computerChoice)) {
        //rules[playerChoice] (if it is coin) = ['shell', 'star']
        console.log(`Good work! Peach wins!`);
        setWinner('player')
        updateScores("player")
      } else {
        //CPU wins
        console.log(`Oh no! Bowser wins!`);
        setWinner('computer')
        updateScores("computer")
      }
}
```

> In the determine winner, I am using the setter function setWinner  to 'player' or 'computer,' depending who wins. Then, in App, the updateScores has access to it. I used a condition, if the winner is `player`, then we can update the score by 1 point, using the setter function `ssetPlayerScore.`