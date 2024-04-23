## What is the virtual DOM?

Goal: optimize updates to the webpage to make it faster and more efficient
- It is a lightweight copy of the real DOM
- It exsists entirely in memory and is a representation of the DOM elements, as React components> 

> Efficiency: When changes occur such as user input / data received from a network request, React updates the Virtual DOM instead of the real DOM. Operations on the virtual DOM are cheapter; therefore, we have a performance benefit. 

> Minimized updates: React compares the updated virtual DOM with a snapshot of the virtual DOM before the update. React identifies exactly what has changed in the UI and this is called "diffing."

> Batched operations: When React knows what changes are necessary, it will update the DOM in the most efficient way possible. Can batch multiple changes together and reduce performance cost of changes to the actualy DOM. 

## DOM in the nursing world 

> Let's say we have a digital chart and there is a patient card with their name, age, blood pressure, pulse, temperature and respirations
- We want to update ONLY the temperature but the entire card is erased and rewritten even though only a small part was changed! YIKES! That is such a waste of time and makes the process so slow! 

> Don't worry, because we know about the Virtual DOM with React!
- The vitual DOM will remember a copy of all of the patient cards. 

> What will happen when you change a patient's temperature? 
1. It will look at the copy to see what the card looked like before
2. It will see that only the temperature has changed
3. It changes just the temperature on the actual card on the screen without touching anything else

> It doesn't have to work as hard rewritting everything, and can update info quickly
> It  makes everything faster so nurses can focus on patient care
