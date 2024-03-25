## Adding background image with Tailwind

> For my tic-tac-toe project, I re-learned how to implement a background image with CSS. This time, I wanted to try learning rock-paper-scissors with Tailwind

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      backgroundImage: {
        'mushroom-palace': "url(path_to_image)",
      }
    }
  }
}

//in App.js
function App() {
  return (
    <div className="bg-mushroom-pattern bg-cover bg-no-repeat bg-inherit min-h-screen">
    </div>
  );

//regular CSS version, in App.css
body {
  background-image: url('../public/mushroom.avif');
  background-size: cover;
  background-position: inherit;
  background-repeat: no-repeat;
  margin: 0px;
  height: 100%;
}
}

```