<h1 align="center">
<a href=" https://github.com/TBosak/game-template/archive/master.zip">
<img src="https://i.ibb.co/zZ6jFpq/coher3ntslogocolor.png" alt="coher3ntslogocolor" border="0"><br>
Coher3nTS Project
</h1>

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/29fb4dffbab44f48bbb57bd6be67d5ca)](https://app.codacy.com/manual/TBosak/game-template?utm_source=github.com&utm_medium=referral&utm_content=TBosak/game-template&utm_campaign=Badge_Grade_Dashboard) [![GitHub](https://img.shields.io/github/license/TBosak/game-template)](https://github.com/TBosak/game-template/blob/master/LICENSE) [![Gitter](https://badges.gitter.im/Angular-Phaser-Electron-Template/community.svg)](https://gitter.im/Angular-Phaser-Electron-Template/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge) [![GitHub stars](https://img.shields.io/github/stars/TBosak/game-template?style=social)](https://github.com/TBosak/game-template) [![GitHub watchers](https://img.shields.io/github/watchers/TBosak/game-template?label=Watchers&style=social)](https://github.com/TBosak/game-template) [![Twitter URL](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fgithub.com%2FTBosak%2Fgame-template)](https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2FTBosak%2Fgame-template)

This is an Angular project template with Phaser, set up to run with Electron.

### Cross-Platform & Responsive
The template should run on any desktop operating system.  

Flexbox integration allows for extremely responsive design elements.  

### Easy to Build
Build with HTML, CSS, and Typescript  

---

## Getting Started


### Prerequisites
[Node.js and Angular CLI](https://angular.io/guide/setup-local)  
(you shouldn’t need to go past step 1)  
[Electron](https://www.electronjs.org/docs/tutorial/installation)  


1. ```npm install electron -g``` to install electron globally & set path.  

2. ```npm install``` in project root folder to ensure that all dependencies are installed.  


### Running
```npm run-script start``` command in the project root folder will concurrently run ```ng serve``` and ```npm run-script electron``` to fire up the project. It takes a minute for serve to finish up. Will hopefully fix this soon to wait and reload electron automatically when angular finishes compiling.

---

## To Do  
* Setting up config(s) to point at correct hosting environment(s) for the project in Electron's main.js  

* Correctly exposing index.html to Electron as Angular runs (this has proven difficult to do in one run-script as you cannot chain commands with 'ng serve') - fixing this may fix item 1, as there will be no reference needed to host location.  

* Need to make use of this template to find pain points between frameworks and correct them before they occur in use of the template, to optimize ease of implementation.  

* Need to hide Electron toolbar, or bind to a boolean for end-user(developer).  

* Need to turn template into an installable Angular schematics package.  

* Add implementation example images and videos to README  

* Need to setup custom component generation  

* Need to integrate Electron forge for install generation of finished product(s)

---

## Built With

* [Angular](https://angular.io/) – The web framework used.  

* [Phaser]( https://phaser.io/) – The game framework used.  

* [Electron]( https://www.electronjs.org/) – The software framework used.  

* [NodeJS](https://nodejs.org/en/) – The Javascript framework and package manager used.  

* [Flexbox](https://github.com/angular/flex-layout) – The web layout model used.

## Authors

* **Tim Barani** - *Initial work* - [TBosak]( https://github.com/TBosak)

See also the list of [contributors](https://github.com/TBosak/game-template/graphs/contributors "contributors") who participated in this project.
  
  
---

[![paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=V5LC4XTQDDE82&source=url)
