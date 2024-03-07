/* 234. Palindrome Linked List

Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

Example 1:
Input: head = [1,2,2,1]
Output: true

Example 2:
Input: head = [1,2]
Output: false
 */

var isPalindrome = function(head) {
  console.log('head', head) //[1, 2, 2, 1]
  let arr = []
  while(head) {
      console.log('while:head', head) //[1, 2, 2, 1], [2, 2, 1], [2, 1], [1]
      arr.push(head.val) 
      console.log('head.val', head.val) //1, 2, 2, 
      console.log('arr', arr) //[1], [1, 2], [1, 2, 2], [1, 2, 2, 1]
      head = head.next
      console.log('head', head) //[2, 2, 1], [1,2], [1], null
  }
  const join = arr.join('')
  console.log('join', join) //1221
  const arrReverse = arr.reverse().join('')
  console.log('arrReverse', arrReverse) //1221
      if (join === arrReverse) {
          return true
      }
          return false
};

/* 
1. head.val refers to the value stored in the node that head currently points to. It's the data part of the node.
2. head.next refers to the pointer (or reference) to the next node in the linked list. It effectively links one node to the next node in the sequence.

let node = {
  val: someValue,  // The data stored in the node
  next: nextNode   // Reference to the next node in the list
};
*/