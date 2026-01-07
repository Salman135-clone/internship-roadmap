const user = {
    name: 'ahmad',
    laptop: 'dell',
    info: function () {
        console.log(this.name)
        // const ref=this;

        let inner = () => {
            console.log(this.name)
        }
        inner()
    }
}

user.info()

const gg = {
    name: 'gg',
    laptop: 'dell',
    info: function () {
        return this.laptop
    }
}

const greetUser = gg.info();
console.log(greetUser)


const hh = 'ga';
const arro = {
    name: 'gg',
    greet: () => console.log(this.hh)
}

arro.greet()








// -------------------------------------------
function showMessages() {
    var mss = 'any message';
    console.log(`${mss}`)

}
showMessages();



function sum(x = 3, y = 7) {
    return x + y
}

console.log(sum(7))

let outer = 'gg'
const person = {
    name: "ali",
    age: 25,
    introduce: function () {
        console.log(`hello ${this.name}`)
    }
}

person.introduce()


const car = {
    car: 'toyota',
    year: '2019',
    getinfo: function () {
        return this.car + " " + this.year

    }
}

console.log(car.getinfo())