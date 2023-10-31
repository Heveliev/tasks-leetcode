// Task 1

var compose = function(functions) {
    return function(x) {
        return functions.reduceRight(function(result, fn) {
            return fn(result);
        }, x);
    };
};


// Task 2

var filter = function(arr, fn) {

};



module.exports = {compose,filter}