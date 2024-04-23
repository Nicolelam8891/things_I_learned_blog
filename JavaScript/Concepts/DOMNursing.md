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
