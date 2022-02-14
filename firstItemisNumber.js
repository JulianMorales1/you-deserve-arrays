const prompt = require('prompt-sync')({sigint: true});

let userArray = JSON.parse(prompt("Enter an array: "));

let firstItem = userArray[0];

let firstItemType = typeof firstItem; 

let isNumber = typeof 1;

let isTrue = true;

let isFalse = false;

if (firstItemType === isNumber){
    console.log(isTrue);
}
else{
    console.log(isFalse);
}
