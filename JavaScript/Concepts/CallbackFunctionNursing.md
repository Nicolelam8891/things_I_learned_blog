## Callback Function Nursing Example

> A callback function in JS is essentially a function that is passed into another function as an argument & then excuted at a later time upon the complement of some kind of task/action
- This is helpful because it allows for async operations
- We can continue with other tasks while waiting for a previous task to complete, and then handle the result when it's ready

> Relating a callback function to nursing

Let's saw I am trying to administer a medication that requires me to observe the patient for any adverse reactions for 15 minutes. I can think of my observation as a `callback function`

1. Schedule the administration of medication (task): I will administer the medication to the patient. Like JS, this initiates an async operation, like sending a request to the server 
2. Doing other tasks: I will wait 15 min to pass, but I can chart while I observe to be efficient. In JS, this is similar to the code execution contining without waiting for the response from the async operation. The program doesn't stop, it keeps running other codes/tasks
3. Observation time (callback execution): When the 15 minutes is over, I can return to the patient to observe and assess for any reactions. The observations is like the execution of a callback function in JS. 
- This observation is like the execution of a callback function in JS. 
- When the waiting time is complete (async task), the `callback` which is the observation and assessment is executed to handle the result. 

```js
function administerMedication(patient, callback) {
    console.log(`Administering medication to ${patient}`);
    setTimeout(callback, 900000); 
}

function checkForReactions(patient) {
    console.log(`Checking ${patient} for adverse reactions.`);
}

administerMedication("Jadalynn Vu", function() {
    checkForReactions("Jadalynn Vu");
});
```

> 
1. administerMedication represents the task of giving the medication.
2. setTimeout is used to simulate the wait time (15 minutes).
3. checkForReactions is the callback function that gets called after 15 minutes to perform the next necessary action, which is checking the patient for any reactions.

> 
Callback functions allow for handling tasks that will finish later, and they help in structuring your program to handle tasks like server responses, events, or time delays without blocking the main thread of execution. Similar to nursing, I want to multitask effectively and ensure that the pt is doing okay while I attend to other duties, and returing to the first time (observing the patient) when necessary. 