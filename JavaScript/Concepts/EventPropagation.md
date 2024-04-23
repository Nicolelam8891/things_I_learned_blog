## Event Propagation 

> This is different than event delegation but they are related concepts in the event handling process within the DOM
- An event triggered on a DOM element will move through the DOM tree
1. Capturing phase: event starts from the window & goes down to the element that triggered the event
2. Bubbling phase: the event bubbles up from the triggering element to the window
- any event can be handled to any point in DOM hierarchy 
- the event travels through the DOM

> Order in which event handlers are called when an event occurs on a webpage
1. capture phase
2. target phase
3. bubbling phase

1. capture phase: event propagates from top of the document down to the element, on which the event occurs
2. target phase: event handler is executed on the element on which the event occurred 
3. bubbling phase: event moves back up the DOM tree, from the element where the event occured to its parent element, until it reaches the top of the document

> document -> HTML -> body -> div -> button
> Event capturing phase (1) -> event target phase (2) -> event bubbling phase (3)