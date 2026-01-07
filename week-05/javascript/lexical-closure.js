// lexical


const name = 'global';

function outer() {
    const name = 'global 1';
    function inner() {
        const name = 'global 2';
        console.log(name);
    }
    inner();
}
outer();


const x = 10;

function outer1() {
    const a = 9;
    function inner1() {
        const b = 8;
        console.log(x);
        console.log(b)
        console.log(a)
    }
    inner1();
}
outer1();

function closure() {
    let count = 0;
    return function () {
        count++
        return count
    }

}
const counter = closure();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());


function createCart() {
    let item = []
    return {
        addCartItem: function (name, price) {
            item.push({
                name: name,
                price: price
            })
            console.log(`${name} added to cart`)
            console.log(item)
        },

    }
}
const cart = createCart();
cart.addCartItem("Laptop", 1000);