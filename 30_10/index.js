// Task 1

Array.prototype.last = function() {
    return this.length ? this[this.length - 1] : -1
};


module.exports = {last:Array.prototype.last}