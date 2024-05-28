## Two sum problem with forLoop vs Map version

> forLoop 
```js
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            let sum = nums[i] + nums[j];
            if (sum === target) {
                return [i, j];
            }
        }
    }
    return [];
};
```

> This method was easier for me to understand and execute, but it is not as fast as using a Map. 
> According to Chat
Explanation:
Nested Loops: We use nested loops to check every pair of elements in the array.
Sum Check: For each pair, we calculate the sum and check if it equals the target.
Return Indices: If we find a pair that sums to the target, we return their indices.
Conclusion:
Efficiency: The Map approach with a for...of loop is more efficient (O(n) time complexity) compared to the nested for loops (O(n^2) time complexity).
Readability: Both approaches are readable, but using a Map is generally considered a more elegant solution for the two-sum problem.

> According to Chat
Comparison:
Hash Map Approach: O(n) time complexity, O(n) space complexity.
Conclusion:
Hash Map Approach: Generally preferred for its linear time complexity and simplicity.

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // First, I create a map to store numbers and their corresponding indices
    let numMap = new Map();
    
    // Second, I create a forLoop
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i]; // This is the current number
        let complement = target - num; // Complement needed to reach target
        
        // Third, write a conditional to check if the complement exists in the map
        if (numMap.has(complement)) {
            // If it exists, return the indices
            return [numMap.get(complement), i];
        }
        //The function checks if the complement exists in the numMap, if it does, it means that the complement and the currently number num add up to the target

        // If the complement does not exist in the map, the current number num and its index i are added to the map
        numMap.set(num, i);
    }
    
    // If no solution is found, return an empty array
    return [];
};
```
> Example:
nums = [2, 7, 11, 15], target = 9

Iteration 1 (i = 0):

num = 2
complement = 9 - 2 = 7
numMap is empty, so 7 is not in numMap.
Add 2 with index 0 to numMap: numMap = {2: 0}
Iteration 2 (i = 1):

num = 7
complement = 9 - 7 = 2
numMap has 2, so we found the pair (2, 7) that adds up to 9.
Return the indices: [0, 1]

The function stops and returns [0, 1] because it found the two numbers 2 and 7 that add up to the target 9.

> Using a Map for this problem provides an efficient solution with a time complexity of O(n), as it only requires a single pass through the array and constant time lookups for complements.

Basic Operations of a Map

```js
//Creating a map
let myMap = new Map();
//Adding Elements
myMap.set(key, value);
//Retrieving values
let value = myMap.get(key);
//Checking for a key:
let hasKey = myMap.has(key);
//Removing Elements
myMap.delete(key);
//Getting the size:
let size = myMap.size;
//Iterating over a Map
myMap.forEach((value, key) => {
    console.log(key, value);
});
```

> Explanation with an Example
Example with nums = [2, 7, 11, 15] and target = 9:

Initialize the Map:

numMap = {}
First Iteration (i = 0):

num = 2
complement = 9 - 2 = 7
numMap.has(7): false
numMap.set(2, 0)
numMap = {2 => 0}
Second Iteration (i = 1):

num = 7
complement = 9 - 7 = 2
numMap.has(2): true
return [numMap.get(2), 1]: return [0, 1]
We find the pair [2, 7] which sums up to 9, and return their indices [0, 1].

It will stop and return what is needed