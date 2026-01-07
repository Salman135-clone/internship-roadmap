// help to extract or get the element from the array or obj


const person = {
    name: 'ali',
    age: 3
}

let { name, age } = person;
console.log(`My name is ${name} and age is ${age}`)


// assign diff name to obj key

let { name: fullname, age: age1, city = 'lahore' } = person;

console.log(`My name is ${fullname} and age is ${age1} and from ${city}`)



// array desturcture

let arr = ['apple', 'oranage', 'lemon', 'watemelon']

const [a1, a2, a3, a4] = arr;
console.log([a1, a2, a3, a4]);

const [z1, ...z2] = arr;
console.log(z1);
console.log(z2)