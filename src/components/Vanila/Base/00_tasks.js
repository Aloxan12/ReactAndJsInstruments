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
// const api = {};
// api.sendNumber=(n)=>{
//     return n
// }
// const number = [1,3,2,5,3,6,7]
// const f=()=> Promise.all(number.map(n => api.sendNumber(n)))
// f().then(res => console.log('Right'))
//
// console.log(api.sendNumber())
// const pr = new Promise((resolve, reject)=> reject('100500'))
// pr.catch(res => console.log(res))
async function start(){
    return 100
}

console.log(start())


//Deep copy
// const obj = {
//     '1':{name: '😆', age: 4},
//     '2':{name: 'Bob', age: 3},
//     '3':{name: 'Mike', age: 2},
//     '4':{name: 'Vlad', age: 4}
// }
// var action = {name: 'Anton', age: 4}
//
// const objCopy = {...obj, [action.age]: {...obj[action.age], name: action.name}}
// console.log(objCopy)

// var man = {age:18}
// function change(man){
//     return {...man, age: man.age + 1}
// }
// change(man)
// console.log(man)


//Рекурсия
// const rootDir ={
//     t: 'dir',
//     title:'root',
//     children: [
//         {t:'file', title:'f1'},
//         {t:'dir', title:'f2'},
//         {
//             t:'dir', title:'dir2',
//             children: [
//                 {t:'file', title:'f3'},
//                 {
//                     t:'dir', title:'f4',
//                     children:[]
//                 },
//         ]}
//     ]
// }
// console.log(draw(rootDir))
//
// function draw(dirOrFile){
//     if(dirOrFile.t === 'dir'){
//         dirOrFile.children.forEach(el => draw(el))
//     }
// }