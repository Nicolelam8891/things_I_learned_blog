## FOR IN LOOP
- Date : 02.28.2024
- Tags: #javascript #concepts #forInLoop

While doing a leetcode problem, I learned there are different ways to check if an object is empty in JavaScript

1. Use Object.keys
- this will return an array
- this contains the property names of the object
- if length of array -> 0, the object is empty
- one can also use Object.values and Object.entries

```js
function isEmpty(obj) {
  return Object.keys(obj).length === 0
}
```

Can loop object properties with for...in
1. Use for...in loop
- this will loop through the enumerable property of the object
- can loop through object properties, if an object has at least one property, it will enter the loop and return false. 
- if the object doesn't have any properties, it will return true

```js
function isEmpty(obj) {
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop))
    return false;
  }
  return true
}
```

These were the main two ways that worked well for the leetcode problem 