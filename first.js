// console.log("hello world"+a)
// const a=1
//to install extension internet should be on
//install extension -----JavaScript (ES6) code snippets ,code runner 
//ctl+alt+n :-to run Code
//ctl+alt+m :- to stop run
//to take inputs from user insatll package :----npm install prompt-sync

//how to create .gitignore file


//git bash : 
//Git Bash is an application for Microsoft Windows environments which provides an emulation layer for a Git command line experience. Bash is an acronym for Bourne Again Shell. A shell is a terminal application used to interface with an operating system through written commands.//


// following are the cmd to push project to github repository
// before this cmd project path is nessasery i.e D:\Surya Data\JAVASCRIPT PROJECTS\Projects>       cmds....
// 1)  git init
// 2) git commit -m "message to identifiy changes"
// 3) git remote add origin  https://github.com/surya221995/js.git (repository link)
// 4) git push -u origin main

// How to create branch to add edited project

const prompt = require('prompt-sync')();
var fname = prompt("Enter your name :");
var lname = prompt("Enter your Last name :");
console.log("your full name is :",fname,lname)
console.log("send",fname)