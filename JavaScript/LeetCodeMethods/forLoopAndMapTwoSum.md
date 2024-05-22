## Two sum problem with Pointer vs Map version

> Pointer system
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

> The two-pointer technique is an efficient method to solve problems like this, but it works best on sorted arrays. For the two-sum problem, if the array is sorted, the two-pointer approach is very effective. However, since the array is not guaranteed to be sorted, the most optimal solution remains using a hash map (or an object in JavaScript).

> According to Chat
Comparison:
Hash Map Approach: O(n) time complexity, O(n) space complexity.
Two-Pointer Approach: O(n log n) time complexity due to sorting, O(1) space complexity (or O(n) if considering the sorted copy).
Conclusion:
Hash Map Approach: Generally preferred for its linear time complexity and simplicity.
Two-Pointer Approach: Effective if the array is already sorted or if sorting the array is acceptable within the constraints.

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // Create a map to store the difference and its index
    let numMap = new Map();
    
    // Loop through the array
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i]; // Current number
        let complement = target - num; // Complement needed to reach target
        
        // Check if the complement exists in the map
        if (numMap.has(complement)) {
            // If it exists, return the indices
            return [numMap.get(complement), i];
        }
        
        // If it doesn't exist, add the number and its index to the map
        numMap.set(num, i);
    }
    
    // If no solution is found, return an empty array
    return [];
};
```

> Using a Map for this problem provides an efficient solution with a time complexity of O(n), as it only requires a single pass through the array and constant time lookups for complements.