# Electron/Angular/Phaser Template
In order to run, make sure to open two separate terminals and do the following:  

1. 'ng serve' in one terminal to start Angular app  

2. 'npm run electron' in the other terminal to start Electron interface  


# Cross-Platform & Responsive
This should run on any desktop operating system  

Flexbox integration allows for extremely responsive design elements  

Angular and Phaser can be easily decoupled from Electron to allow for mobile deployment with a different framework  


# Easy to Build
Game creation should be incredibly easy with HTML, CSS, and Typescript  


# To do:
*Setting up config(s) to point at correct hosting environment(s) for the project in Electron's main.js  

*Correctly exposing index.html to Electron as Angular runs (this has proven difficult to do in one run-script as you cannot chain commands with 'ng serve') - fixing this may fix item 1, as there will be no reference needed to host location.  

*Need to make use of this template with to find pain points between frameworks and correct them before they occur in use of the template, to optimize ease of implementation.
