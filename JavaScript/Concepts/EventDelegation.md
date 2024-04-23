## Event Delegation 

> Technique for handling events that involves adding a single event listener to parent element rather than adding event listeners to individual child elements. When an event occurs on a child element, the event listener on the parent element is notified, and the parent element can handle the event. This is helpful when you have many child elements and want to avoid adding an event listener to them all. 

- Basically, instead of attaching an individual event listener to each button, a single listener is attached ot the `div` that contains all the buttons. The listener waits for clicks to bubble up from the buttons
- This makes it moe efficient and simplifies managing dynamic elements

> This is awesome. When I have a patient, I have to click on a button to display who accompanied the pt. There are at least 20 buttons, would I want to add an event listener to the buttons, 20 times? Probably not!

Example: Imagine I have a list of 100 buttons, instead of setting up 100 event listeners, one for each button, I can just attach 1 event listener to the entire list. 
- When a button is clicked, the click event "bubbles up" to the list and the single event listener reacts, one can still determine which button was clicked based on the event details and react accordingly with just one piece of code listening! 