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
// const num = {num: 5}
// const number = 5
// const str = 'valenok'
// String.prototype.retNum = function (){
//     return this.toUpperCase()
// }
// console.log(str.retNum())



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
// async function start(){
//     return 100
// }

// setTimeout(()=>console.log(2), 1000)
// setTimeout(()=>console.log(1), 0)
//
//
//
// const pr = new Promise((res, rej)=>{
//
//     setTimeout(()=>res(3), 0)
// }).then(res => console.log())


const doAsyncTask = () => Promise.resolve('done');
const asyncFunc = async function() {
    const val = await doAsyncTask();
    console.log(val); //1
    console.log("done2"); //2
    return "done3"
}

asyncFunc().then(val => console.log(val)); //3


// for (var i = 0; i < 10; i++) {
//     ((i)=>setTimeout(function () {
//         console.log(i);
//     }, 100))(i)
// }

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