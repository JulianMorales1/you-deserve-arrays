const prompt = require('prompt-sync')({sigint: true});

let arrayItem = JSON.parse(prompt("Enter an array: "));

console.log(arrayItem[0]);
