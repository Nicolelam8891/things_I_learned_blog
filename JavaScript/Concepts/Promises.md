# Promises

- An object represents the eventual completion of an action
1. resolved upon completion
2. rejected upon failure

Promise
1. resolve -> .then()
  - this runs upon the resolution of a promise and returns another promise 
2. rejected -> .catch() 
  - This runs upon the rejection of a failed promise. This is used for error handling

  When you press enter, the promise will be pending
  - It can either be fulfilled or not and will give a response

  Basically, a promise says: "I'll let you know when I am done and when I am done, I will give you the result that you asked for."
  - The 2nd .then() gives you the response
  - console.log runs only when you get the response back