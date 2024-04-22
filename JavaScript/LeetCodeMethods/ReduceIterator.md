## Reduce Iterator Problem

> I have not completed a reduce iterator problem in some time and it has made me realize how much I really miss doing iterator problems. They are very fun to do and feels as though I am playing a game! When I first did an iterator problem I had no idea what I was doing and felt so defeated. "I will never get this," I told myself and wanted to give up. But I didn't. I spent 1-2h every day practicing Iterator problems for 5 weeks and finally got it. It used to take me 1-1.5 hours to complete one, sometimes I wouldn't be able to get it at all. But in the end, I was able to start completing them in 15 mintes, then 10, and sometimes a problem in 5. Everything takes practice. Don't give up when something is hard! Believe in yourself and keep pushing. 

Problem:
 Write a function called categorizeSkateboarders that takes an array of skateboarder objects as input and returns an object with two properties: active and retired. The active property should contain an array of active skateboarders (including those who need practice), and the retired property should contain an array of retired skateboarders.

  returns 
 {
   active: [
   'Tony Hawk',
   'Rodney Mullen',
   'Aori Nishimura',
   'Elissa Steamer(needs practice)'
 ],
   retired: ['Leticia Bufoni', 'Nyjah Huston', 'Ryan Sheckler']
 }
 */

```js
 const categorizeSkateboarders = (skatebordersArray) => {
  return skatebordersArray.reduce((acc, skateboarder) => {
    if (skateboarder.retired === true) {
      acc.retired.push(skateboarder.name)
    } else {
      if (skateboarder.tricksLanded < 10) {
        acc.active.push(`${skateboarder.name} (needs practice)`)
       } else {
          acc.active.push(skateboarder.name)
      }
    }
    return acc;
  }, {active: [], retired: []})
}
 console.log(categorizeSkateboarders(skateboarders))
 ```

 > Here is a great example of a good reduce problem I got pretty good at. I struggled with reduce in the beginning; therefore, I spent the most time on this method. It then became my favorite iterator and when I finished off the semester at Turing, when I took my final, I used reduce for two problems and passed the exam! 

 # do not give up