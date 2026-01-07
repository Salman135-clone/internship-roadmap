function counter() {
    let count = 0
    return function () {
        count++;
        console.log(count)
    }
}

const click = counter();
click();
click();
click();


function requireAge(require) {
    return function (age) {
        return age >= require
    }
}
const check = requireAge(18);
console.log(check(19))


function main(fn) {
    fn();
}
function greet() {
    console.log("Say Cheezz")
}
main(greet);

function multipliyer(x) {
    return function (y) {
        return x * y
    }
}
const multiply = multipliyer(2);
console.log(multiply(2))
