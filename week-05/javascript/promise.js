let myPromise = new Promise((resolve, reject) => {
    let condition = true;

    if (condition) {
        resolve("Promise is fulfilled")
    } else {
        reject("Req fail")
    }
})

myPromise
    .then(data => console.log(data))
    .catch(err => console.log(err));