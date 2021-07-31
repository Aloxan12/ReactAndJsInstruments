const list = [1, 2, 4, 5, 6]

Array.prototype.customForEach = function (callback){
    if(!callback || typeof callback !== 'function'){
        throw Error('The callback provided is not a function')
    }
    if(!this){
        throw Error('Cannot call forEach on null or undefined')
    }
    for(let i = 0; i< this.length; i++){
        callback(this[i], i, this)
    }
}
list.customForEach((elem, i, arr)=> console.log(elem, i, arr))