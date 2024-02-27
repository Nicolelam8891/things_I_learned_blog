//Learned the difference between using a for...of loop vs while loop. I tried a LC problem today and wanted to do a while loop, but tried a for...of loop first and realized it was much easier to use the while...loop.

//Used a while loop because I needed to repeat an action until a certain condition ahcnges. It will continue to execute the condition as long as it remains true

//Need to repeat a block of code based on a condition that changes over time

//for...of loop is used when you need to iterate over each item in an iterable (array or string) and you know in advance that you want to examine or perform actions on each of those items

var findFinalValue = function(nums, original) {

  let currNum = original 
  
  //sorting it first makes it faster
  nums.sort((a, b) => a - b)

  //used a while loop to check if current is in nums, if it is, it will double the original value; otherwise, it'll stop.
      while (nums.includes(currNum)) {
      currNum = currNum * 2
      }
      return currNum //update the original value, which is what we are looking for
  }