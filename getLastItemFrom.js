const prompt = require('prompt-sync')({sigint: true});

let userArray = JSON.parse(prompt("Enter an array: "));

let arrayLength = userArray.length;

let lastItem = arrayLength - 1;

console.log(userArray[lastItem]);
