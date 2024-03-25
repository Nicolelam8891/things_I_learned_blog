## Background Image for Tailwind

```js 
function App() {

  //background image
  const backgroundImage = {
    backgroundImage: `url('/mushroompalace.png')`, 
    backgroundSize: 'cover',
  }

  return (
    //inside of the main className, styling will go here
    <main className="App bg-cover bg-no-repeat bg-center relative m-0 h-screen" style={backgroundImage}>
      <div className='main-content'>
        <Header />
      </div>
    </main>
  );
}
```

> There is another way to do this with tailwind.config.js

```js 

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {}
  },
  plugins: [],
}
```

> Background image would be in extend: {}
- I did have some difficulties with the path and had to move the images around
- I had to make sure the image was .png, to make it consistent
- The background image was .avif and it didn't work at first, after a couple hours of trying different ways to implement the background image with Tailwind, it finally worked after I changed the name
- Doing the background image with CSS was much easier, and worked fine as well with tailwind