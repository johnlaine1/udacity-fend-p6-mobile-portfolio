# Website Performance Optimization portfolio project
### By: John Laine


## How to run the application

1. Clone the project to your local machine.
2. Run `npm install` from the command line to install needed packages.
3. run `gulp` from the command line to build the application into the `/dist` directory.
4. Point your webserver to the `/dist/index.html` file.
5. You can also run `serve:dist` or `serve:src` from the command line to build the app and start a webserver on port 8080.



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

## Page speed results for index.html
* Initial
  * Mobile: 27/100
  * Desktop: 29/100

#### Final
* Mobile: 95/100
* Desktop: 97/100