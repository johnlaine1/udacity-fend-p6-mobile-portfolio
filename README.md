# Website Performance Optimization portfolio project
### By: John Laine


## How to run the application

Clone project

Run `npm install` to install needed packages

Port is currently set to 8000, if you need to change this...


### Optimizations Performed in the `views/js/main.js` file

Updated the updatePositions function
Broke up the single for loop which was both checking and setting a value in the 
DOM into 2 loops. 1 to check and store values and the other to set all the values
at once, thereby avoiding forced synchronous layouts or layout thrashing.


In function changePizzaSizes
create a variable to store: document.querySelectorAll(".randomPizzaContainer")
to keep the code DRY.

remove determineDx function.

## Page speed results
#### Initial
* Mobile: 27/100
* Desktop: 29/100

#### Final
* Mobile:
* Desktop: