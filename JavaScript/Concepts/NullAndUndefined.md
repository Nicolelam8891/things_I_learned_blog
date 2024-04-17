## Null vs Undefined

> Both have no value

> Undefined
- Basically, undefined is a default unitialized state
- A variable that has been declared but has not been assigned a value will be undefined
- it represents a lack of value because it has not been initialized

Example
> A nurse pulling up a pt health record, some of the fields are empty because it has not been filled yet, due to the recent admission
- These recent entries are undefiend and we are unsure if the info doesn't exsist or has not been recoreded yet
Ex: medication field is blank first. Either the pt is not on any medications OR it has not been entered yet

> Null
- This is an intentional absence of any object value
- It is assigned explicitly to a variable to denote that the variable is meant to be empty
- It could be n/a, for example: allergies. Either one has a list of allergies or none (n/a). This is an inteltional acknowledgement that a nurse or doctor has checked the info and confirmed no
Ex: In my rock, paper, scissors app that I created, I have the following: 
```js
const [gameMode, setGameMode] = useState(null);
```
- In this case, it is not defined yet and this was intentional. 
- This is a good exampel of using null, and for the gameMode, I have a classic vs difficult mode. At first, there is no mode set yet -> useState(null) and has no value until user clicks on either classic or difficult 