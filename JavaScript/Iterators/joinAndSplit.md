# Join & Split Methods
```js
const sentencesToReverse = [
  "Hello, world!",
  "This is a sample sentence.",
  "Array methods are fun to learn."
];
```

// Prompt: Write a function that takes an array of sentences and returns a new array with each sentence reversed.
/* 
input: array of sentences 
output: array of sentences reversed
Steps: target and manipuate each sentence, need to iterate over each element
1. map 
  a. split method to split each sentence into an array of words 
2. reverse method
  a. join will join the reversed array of words back into a sentence
3. return
*/
```js
const getReversedSentences = (sentencesToReverseArray) => {
  const reversedSentences = sentencesToReverseArray.map(sentence => sentence.split(' ').reverse().join(' '))
    return reversedSentences
}
console.log(getReversedSentences(sentencesToReverse))
```

> 
Steps:
Split the sentence into words using split(' ') (splitting by space).
Reverse the array of words.
Join the reversed array of words back into a sentence using join(' ') (joining with space).

> 
Explanation:

The map method creates a new array with the results of calling a provided function on every element in the original array.
The provided function multiplies each element by 2.
The function returns the new array with the doubled numbers.