## What is a callback function?

> It is a function that is passed into another function as an argument, which is then invoked inside the outer function 

- it is then executed later
- this allows for async operations that can continue with other tasks while waiting for a previous task to compute 
- primary purpose is to be executed at a later point in time or under certain conditions

```js
  const getBookTitles = (booksArray) => {
    const bookTitles = booksArray
      .filter(book => book.rating > 2)
      .map(book => book.title)
    return bookTitles
  }
    console.log(getBookTitles(books))
```

> The code demonstrates the use of a callback function within the context of JavaScript array methods. 

- there are two exampels of callback functions used with the filter() and map() methods
- filter callback creates a new areray with all elements that pass the test implemented by the provided function 
- map callback, basically, after filtering the array, the map() method creates a new array populated with the results of calling the provided function on every element in the calling array