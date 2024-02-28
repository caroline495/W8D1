// Your code here
Array.prototype.uniq= function(){
    let result = [];
    this.forEach((el)=>
    {if( result.indexOf(el) === -1)
        {result.push(el)}});
    return result
}

Array.prototype.bubbleSort = function(){
    let sorted = false;
    while(!sorted){
        sorted = true
        for(i = 0; i < this.length - 1; i++){
            if(this[i] > this[i + 1]){
                sorted = false;
                [this[i], this[i+1]] = [this[i+1], this[i]];
            }
        }
    }
    return this
}
String.prototype.substrings = function(){
    let result = [];
    for(i = 0; i < this.length - 1; i++){
        let substring = this[i];
        result.push(substring);
        for(j = i + 1; j < this.length; j++){
            substring += this[j];
            result.push(substring);
        }
    }
    result.push(this[this.length - 1]);
    return result.uniq()
}
