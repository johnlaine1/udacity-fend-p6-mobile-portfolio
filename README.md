# Website Performance Optimization portfolio project
### By: John Laine


## How to run the application

1. Clone the project to your local machine.
2. Run `npm install` from the command line to install needed packages.
3. run `gulp` from the command line to build the application into the `/dist` directory.
4. Point your webserver to the `/dist/index.html` file.
5. You can also run `gulp serve:dist` from the command line, after cloning and running `npm install`, to build the app and start a webserver on port 8080.



### Optimizations Performed in the `/main.js` file for the pizzeria

1. Updated the `updatePositions()` function. 
   * Broke up the single for loop which was both checking and setting a value in the 
DOM into 2 loops. 1 to check and store values and the other to set all the values
at once, thereby avoiding forced synchronous layouts or layout thrashing.
   * Wrap the second loop in a function `updateStyles()` and call it using `requestAnimationFrame()`

2. Updated the  `changePizzaSizes()` function.
   * Create a variable to store: document.querySelectorAll(".randomPizzaContainer")
to keep the code DRY.
   * Refactor and simplify to no longer need the determineDx function.
   * Remove determineDx function as it is no longer needed.
   * Add a function `changeSize()` to hold the code that makes style changes and call this function with requestAnimationFrame to allow the browser to decide when to execute.

## Page speed results for index.html
* Initial
  * Mobile: 27/100
  * Desktop: 29/100

* Final
  * Mobile: 95/100
  * Desktop: 97/100

## Revisions from reviewer suggestions
1. Add `'use strict';` to all js files.
2. Use `document.getElementById()` instead of `document.querySelector()` where applicable in `main.js`.
3. Use `document.getElementsByClassName()` instead of `document.querySelectorAll()` where applicable in `main.js`.
4. Line 449 and line 505 in `main.js` save the array length property to a variable so the value does not have to be accessed from the array during each iteration of the for loop.
5. Line 469 in `main.js`, declare pizzasDiv outside of the loop so there is only one DOM call.
6. Line 533 in `main.js`, update the callback function to calculate the max number of rows needed and threfore max number of pizzas needed, based on the height of the screen.
7. Line 536 in `main.js`, move the `elem` declaration outside of the loop.
8. Line 537 in `main.js`, create a variable to store the DOM element outside of the for loop.
9. Line 36 in `style.css`, add the `transform: translateZ(0)` and `backface-visibility: hidden` properties, also add vendor prefixes.