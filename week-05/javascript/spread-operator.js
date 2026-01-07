// spread operator is used to expend or spread out element of an iterable in array,obj,string

let arr = [1, 2, 3];

console.log(...arr);

const combine = [0, ...arr, 4];

console.log(combine);
console.log(arr)

// clone spread operator

let arr1 = ["a", "b", 'c', 'd'];
let arr2 = arr1;

arr2.push("f");

console.log(arr1)
console.log(arr2)

let arr3 = ['x', 'y', 'z'];
let arr4 = [...arr3];


arr4.push('end')

console.log(arr3);
console.log(arr4);


let obj1 = { x: 1, y: 2 };
let obj2 = { z: 3 };

const together = { ...obj1, ...obj2 };

console.log(together)



function sum(n1, n2, n3) {
    return n1 + n2 + n3
}
let num = [3, 1, 1];
console.log(sum(...num))


// set is a way to store data in a list that automatically remove the duplicate


const mySet = new Set([1, 1, 2, 2, 3, 3, 4, 4, 5]);
console.log(mySet)


const fruits = new Set();

fruits.add('apple');
fruits.add('banana');
fruits.add('orange');

console.log(fruits)
console.log(fruits.size)
console.log(fruits.has('orange'))
fruits.delete('banana')
console.log(fruits)

for (let fruit of fruits) {
    console.log(fruit)
}



const user1 = { name: "John", age: 30 };
const user2 = { name: "Jane", age: 25 };
const user3 = { name: "John", age: 30 }; // Same values as user1

const users = new Set();
users.add(user1);
users.add(user2);
users.add(user3);

console.log(users);