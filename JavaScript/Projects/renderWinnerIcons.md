## Rendering the winner's chosen icons

>  Today, I am working on having the player's choice and computer's choice (their image icons)n to render on the DOM. I am also working on hiding all of the icon buttons and only displaying the winning icon images! 

1. I first crated an object 
a. key: value pairs
b. name of images: the actual image name
>I made sure to import all of the images over
```js
import bombIcon from '../../assets/bombIcon.png'
import shellIcon from '../../assets/shellIcon.png'
import starIcon from '../../assets/starIcon.png'
import coinIcon from '../../assets/coinIcon.png'
import daisyIcon from '../../assets/daisyIcon.png'
```
```js
const iconImages = {
    bombIcon: bombIcon,
    shellIcon: shellIcon,
    starIcon: starIcon,
    coinIcon: coinIcon,
    daisyFireballIcon: daisyIcon, 
  };
```
> I wrote a function to render tha icon image
a. taking in a parameter choice
b. I assigned iconImages[choice] to the variable IconImage so that I can resuse the variable. iconImages is assigned to an object and since the icon depends on the player's choices, I used bracket notation since it is an object. 
c. I returned the IconImage, having it render the img; otherwise, null. This is a ternary operator. 
```js
   const renderIcon = (choice) => {
      const IconImage = iconImages[choice];
      return IconImage ? <img src={IconImage} alt={`${choice}`} /> : null;
    };
```
>Here is what I have for the Winner Annoucement portion of my code: 
1. I have three different options
- draw
-player wins
-computer wins
2. If the winner is a draw, then I will want to render text saying, It's a draw! You both chose: 
3. I have a fragment, I want each of these to be separated but instead of creating a whole new dv, I am using a fragment here because the CSS will all be similar
4. I then render the icon for both player choice and computer choice and encase it in curly brackets, so React knows to read it as Javascript! 
5. I repeat the process for when the player wins and when the computer wins

```js
{/* Winner Annoucement */}
      {gameStarted && (
        <div className='winner-announcement text-5xl font-bold text-blue-200 '>
          {winner === 'draw' && (
          <>
            <p>It's a draw! You both chose:</p>  
            {renderIcon(playerChoice)} 
            {renderIcon(computerChoice)} 
          </>
          )}
          {winner === 'player' && (
          <>
            <p>Good work! Peach wins!</p>  
            {renderIcon(playerChoice)} 
            {renderIcon(computerChoice)} 
          </>
          )}
          {winner === 'computer' && (
          <>
            <p>Oh no! Bowser wins!</p>  
            {renderIcon(playerChoice)} 
            {renderIcon(computerChoice)} 
          </>
          )}
        </div>
      )}
```

> My approach worked! There are many different ways to approach this but this was my logic and everything worked out! For my next step, I am needing to figure out how to hide the other icon images, and only render the images of the player's choices! On to the next adventure!