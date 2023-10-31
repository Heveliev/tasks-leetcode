// Task 1

var createCounter = function(n) {
    let count = 0;
    return function() {
        const res = count ?  n + count :  n
        count = count + 1
        return res

    };
};
// var createCounter = function(n) {
//     return () => n++;
// };


// Task 2
async function sleep(millis) {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve(millis), millis)
    });
    const result = await promise
}


module.exports = {
    createCounter,
    sleep,

}