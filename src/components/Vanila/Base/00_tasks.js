// const obj = {name: 'test'}
//
// Function.prototype.myBind = function (context, ...args){
//     return (...newArgs)=>{
//         return this.apply(context, args.contact(newArgs))
//     }
// }
//
// function factorial(num){
//     if(num < 1) return 1
//     return  factorial(num-1)* num;
// }
//
// console.log(factorial(7))

//Promise
const api = {};
api.sendNumber=(n)=>{
    return n
}
const number = [1,3,2,5,3,6,7]
const f=()=> Promise.all(number.map(n => api.sendNumber(n)))
f().then(res => console.log('Right'))

console.log(api.sendNumber())