## Example of Event Delegation 

```js 
  const handleClick = (event) => {
    if (event.target.tagName === 'BUTTON') {
      console.log('This number was clicked', event.target.textContent);
    }
  }

//this will be in there return() so that it will render on the DOM
 <div onClick={handleClick}>
      <button className="1">1</button>
      <button className="2">2</button>
      <button className="3">3</button>
    </div>
```
> BUTTON, does need to be in all caps, I tried with lowercased and it was not working. 

>On the DOM, when I look at the counsole and click on 1, it will log 'This number was clicked 1'

>In the handleClick function, event.target.tagName is used to check whether the element that triggered the click event is a button. This is crucial when the event listener is attached to a parent element (like a div) but I only want to execute certain code for specific child elements (like buttons).

>event.target.textContent is used to access the actual text within the button that was clicked. This can be useful for identifying which button was pressed based on its label, or for performing actions related to the button's content.

>These properties make it easier to interact with and manipulate web pages dynamically using JavaScript, enhancing user interfaces and user experiences.