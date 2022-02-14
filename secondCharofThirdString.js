const prompt = require('prompt-sync')({sigint: true});

let userArray = JSON.parse(prompt("Enter an array: "));

let thirdItem = userArray[2];

let secondCharacter = thirdItem[1];

let thirdItemString = typeof thirdItem;

let isString = typeof "j";

if (isString === thirdItemString){
    console.log(secondCharacter)
}

else {
    console.log("error!")
}
