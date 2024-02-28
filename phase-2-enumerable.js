Array.prototype.myEach = function(callback) {
    for (i = 0; i < this.length; i++) {
        callback(this[i]);
    }
}

const doubler = number => number * 2;

Array.prototype.myMap = function(callback) {
    let result = [];
    this.myEach((el)=>{
        let newEl = callback(el);
        result.push(newEl);
    })
    return result;
}

Array.prototype.myReduce = function(callback) {
    let initialValue = this[0];
    let sliceIndex = 1;
    if (arguments.length > 1) {
        initialValue = arguments[1];
        sliceIndex = 0;
    }

    let result = initialValue;

    this.slice(sliceIndex).myEach((ele)=> {
        result = callback(result, ele);
    })
    return result;
} 


