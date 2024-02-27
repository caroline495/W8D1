// Your code here
Array.prototype.uniq= function(){
    let result = [];
    this.forEach((el)=>
    {if( result.indexOf(el) === -1)
        {result.push(el)}});
    return result
}

Array.prototype.twoSum= function(){
    let result = [];
    for(i = 0; i < this.length - 1; i++) {
        for(j = 0; j < this.length; j++) {
            if(this[i] + this[j] === 0 && i < j){
                result.push([i, j])
            }
        }
    }
    return result
}

Array.prototype.transpose= function(){
    let result = [];
    for(i = 0; i < this.length; i++){
        let transpose_row = [];
        for(j = 0; j < this[0].length; j++){
            let ele = this[j][i];
            transpose_row.push(ele);
        }
        result.push(transpose_row);
    }
    return result
}
