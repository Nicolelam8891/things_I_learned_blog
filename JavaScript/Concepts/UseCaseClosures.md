## Use case for closures

> Protect variables from any sort of outside manipulation 
- Other languages often have ways of implementing private or protected variables, but JS does not. If we want to achieve this, we have to use a closure. 

Updated definition of closure: 
> When an inner function has access to the outer function's variables amd can remember the enviroment in which it was created. The outer function's variables are protected by the closure and can only be manipulated by code defined within that function. 

1. Closures are functions that capture and remember the enviroment in which they were created
2. It can be used to create private variables and memorize functions
3. Implementation of closures can result in efficient, modular, and maintainable code
4. Avoid global namespace pollution, code duplication and side effects 
