## prev in Javascript

```js
useEffect(() => {
  const currentWinner = checkForWinner(squares); 

  if (currentWinner) {
    setShowConfetti(true);
    setWinner(currentWinner)
  } 

  console.log('currentWinner', currentWinner)
  if (currentWinner === '🐯') {
    setScores(prevScores => {
      return {...prevScores, playerOne: prevScores.playerOne + 1}
    });
  } else if (currentWinner === '🐉') {
    setScores(prevScores => {
   
      return {...prevScores, playerTwo: prevScores.playerTwo + 1}
    });
  } else {
    setShowConfetti(false)
  }
}, [squares])

```
> I have seen prev before in other React projects and wanted to try using that in my Tic Tac Toe project. 
- the prevScore sis a callback function parameter that represents the previous state of the score 
- {..prevScores}, here, the spread operator used to copy the properties of prevScores object into a new object. 
- prevScores -> object {
  playerOne: 0,
  playerTwo: 0
}
> I have a better understanding of why I have seen this done in other React projects. It was helpful to try it out today! 