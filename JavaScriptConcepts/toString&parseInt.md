## toString & parseInt Method🧷 

I did a leetcode challenge today and found out about toString method and parseInt method. I have used parseInt method prior, but had forgotten about it. 

```js 
var minimumSum = function(num) {
  let numArray = [];
  num = num.toString(); 
  //2932, changes to string
  
  for (let i=0; i < num.length; i++) {
      numArray.push(parseInt(num[i]))
  }
  numArray.sort();
  //[2, 2, 3, 9]

  let new1 = numArray[0].toString() + numArray[2].toString();  
  //2 + 3 -> 23 (string)
  let new2 = numArray[1].toString() + numArray[3].toString();
  //2 + 9 -> 29 (string)
  
  return parseInt(new1) + parseInt(new2); 
  //23 + 29 = 52
  //parseInt changes a string of values into an integer
};
```

1. What I learned today, if I want to change an integer to a string...I can use the .toString() method
2. If I want to change the string back into an integer, I can use hte .parseInt() method
3. These two methods are very useful for me to learn and remember for these types of math problems!