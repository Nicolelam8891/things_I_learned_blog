## Background image 

> I forgot how to make a background for a React app. Here is what I did for this project

```js
body {
  background-image: url('../public/ticTacToe.jpeg'); //need to make sure the path is correct or the image will not show up
  background-size: cover; //this will cover the app
  background-position: center; //this places the image in the center
  background-repeat: no-repeat; //if I don't have this, the image will keep repeating
  margin: 0px;
}

html {
  height: 100%;
}
```
> I needed to make the height of the html to 100%. If I didn't, I had extra white space on the bottom

```js
text-shadow: -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000;
```
> Learned how to create an outline around letters! 
