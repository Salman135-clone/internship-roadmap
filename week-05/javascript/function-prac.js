// normal function with param and argument 
function greet(name) {
    console.log(`Hello testing ${name}`);
}
greet('123')


// return state to return any value and function get stop execute after return
function sum(a, b) {
    let num = a + b;
    return num;
}
sum(4, 5);

// return statment for return the value and store in vairable 
function square(num) {
    return num * num;
}
let result = square(5);
console.log(result)

// function expression is a way we store function in a variable
let subtract = function (a, b) {
    return a - b;
}
subtract(2, 1)

// testing value 
let message = 'any message';
function showMessage() {
    console.log(`${message}`)

}
showMessage()



function showMessages() {
    let mss = 'any message';
    console.log(`${mss}`)

}
showMessages()


// arrow function


const divide = (a, b) => a / b
divide(2, 2)