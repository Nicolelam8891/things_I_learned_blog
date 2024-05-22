## Icons for Rock Paper Scissors Project

> Going back to review this project for learning purposes and I decided to blog about it!
For the icon images, I decided to put them in src, in the assets folder. I had it in public at first, but I wanted to organize it in a way where it was easy to find the images. Trying to figure out the syntax to import the icons caused some issues, but I finally figured it out. Because it was in assets, which is in src, I had to do "../.." to get into assets and to target the png image. I also had to make sure that it was consistent with png. I had to make sure all of the images in src was named png, to keep it consistent. At first, one of the images was named something different, and with tailwind, it affected the code and I was unable to render the image onto the DOM. This was a great learning lesson for me to remember next time so that I won't waste time trying to de-bug and troubleshoot. 

> To access the icon images, I created an object inside of the GameBoard component. The object contains key value pairs. 
```js 
  const iconImages = {
    bombIcon: bombIcon,
    shellIcon: shellIcon,
    starIcon: starIcon,
    coinIcon: coinIcon,
    daisyFireballIcon: daisyIcon, 

import bombIcon from '../../assets/bombIcon.png'
import shellIcon from '../../assets/shellIcon.png'
import starIcon from '../../assets/starIcon.png'
import coinIcon from '../../assets/coinIcon.png'
import daisyIcon from '../../assets/daisyIcon.png'
  };
```

> I named the values after the name of the import