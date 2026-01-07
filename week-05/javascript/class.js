class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello my name is ${this.name} and age is ${this.age}`)
    }
}

const student = new Person("Jack", 30);
student.greet();


class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }
    displayInfo() {
        console.log(`This is a ${this.brand} brand and model is this ${this.model}`)
    }
}

let car1 = new Car('Toyota', 1998);
let car2 = new Car('Yaris', 2021);

car1.displayInfo();
car2.displayInfo();


class Book {
    constructor(title, author, page = 100) {
        this.title = title;
        this.author = author;
        this.page = page;
    }
    summary() {
        console.log(`Title:${this.title}, Author:${this.author}, Page:${this.page}`)
    }
}
let book1 = new Book('CS', 'me');
let book2 = new Book('CS', 'me', 50);
book1.summary()
book2.summary()


// inheritance

class Animal {
    constructor(name) {
        this.name = name;

    }

    speak() {
        console.log(`My animal name is ${this.name}`)
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
    speak() {
        console.log(`${this.name} is barking and breed is ${this.breed}`);
    }
}

const dog1 = new Dog('Dog', 'unknow');
dog1.speak();
const cat = new Animal('Cat');
cat.speak();

