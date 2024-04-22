## Data Model 

> The data model organizes data elements & will standardize how they relate to one another 
1. The data model dictates how data is handled within a react app.
  a. Ex: pt's health record will include a lot of information such as: allergies, medications and etc
2. This is pt's "data model" in a hospital's computer system
  a. This is a structured format that defines what data is stored and how it is used

> What does the data model do? The data model helps to manage and predict the state of the app. 
- "state" in react is similar to the current condition of a patient
- Just as a pt's condition can change, so can the state of a react component
- Example: when something changes such as a patient's blood pressure, React updates the relevant components (think of it as updating the patient's chart) in the user interface to reflect this new state

Benefits:
1. predictibility: makes flow predictable, helps us understand where and how data flows
  - example: well-documented patient record 
2. reusability: like standard forms can be used for different patients, components can be reused across different parts of the application, which help save development time
3. maintainability: it is easier to maintain and update the app, since it is well defined
4. efficiency: React is efficient because it can update only the parts of the UI that need to change
5. debugging: it is a clear data-model -> therefore it is easy to debug. It is also easier to trace back to find the problems

> In react, data model often involves the components state and props
- state holds info about component's current situation
- props are like parameters passed to a component by its parent 
  Ex: nurse following doctor notes to understand the treatment plan

React's uniwue approach to efficiently update the DOM (the structure of the UI) is based on the change ot the state & props. This is similar to a pt treatment plan that might change due to new entries in the health record 