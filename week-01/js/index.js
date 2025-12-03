const prompt = require("prompt-sync")();
console.log("Hello World")

console.log('message from practice-branch')

const userNumber = Number(prompt("Guess Any number from 0 to 99:"));

const randomNumber=Math.floor(Math.random() * 100);

if(userNumber > randomNumber){
    console.log('Your guess number is too high')
}else if(randomNumber > userNumber) {
    console.log("System number is higher than your guess")
}else if(randomNumber == userNumber){
    console.log("WOW you guess it correctly")
}else{
    console.log("invalid value")
}
console.log("System Guess Number:",randomNumber)

