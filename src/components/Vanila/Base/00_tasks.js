const obj = {name: 'test'}

Function.prototype.myBind = function (context, ...args){
    return (...newArgs)=>{
        return this.apply(context, args.contact(newArgs))
    }
}

function factorial(num){
    if(num < 1) return 1
    return  factorial(num-1)* num;
}

console.log(factorial(7))