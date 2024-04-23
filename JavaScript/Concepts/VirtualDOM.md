## What is the virtual DOM?

Goal: optimize updates to the webpage to make it faster and more efficient
- It is a lightweight copy of the real DOM
- It exsists entirely in memory and is a representation of the DOM elements, as React components> 

> Efficiency: When changes occur such as user input / data received from a network request, React updates the Virtual DOM instead of the real DOM. Operations on the virtual DOM are cheapter; therefore, we have a performance benefit. 

> Minimized updates: React compares the updated virtual DOM with a snapshot of the virtual DOM before the update. React identifies exactly what has changed in the UI and this is called "diffing."

> Batched operations: When React knows what changes are necessary, it will update the DOM in the most efficient way possible. Can batch multiple changes together and reduce performance cost of changes to the actualy DOM. 

