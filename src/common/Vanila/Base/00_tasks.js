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


// const doAsyncTask = () => Promise.resolve('done');
// const asyncFunc = async function() {
//     const val = await doAsyncTask();
//     console.log(val); //1
//     console.log("done2"); //2
//     return "done3"
// }
//
// asyncFunc().then(val => console.log(val)); //3


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


// const arr = [
//     {id: 1, p: 4},
//     {id: 2, p: 13},
//     {id: 3, p: 8},
//     {id: 4, p: 66},
//     {id: 5, p: 4}
// ]
//
// const newArr = arr.map(a=> ({...a, name:'Alex'}))
//
//
//
// function max(arr){
//     let maxN = {id: 1, p: 0}
//     for (let i = 0; i< arr.length; i++){
//         if(arr[i].p > maxN.p){
//             maxN = arr[i]
//         }
//     }
//     return maxN
// }
//
// console.log(max(arr))

// const obj = {}
// const str = 'str'
// let result = obj + str
// console.log(result)
// let foo= 5
// {
//     let bar = 1
// }
//
// console.log(bar)

// (function() {
//     var x = y = 10;
// })();
//
// console.log(y);
// console.log(x);

// function fun() {
//     console.log(a);
//     console.log(inner());
//
//     var a = 5;
//     function inner() {
//         return a + 5;
//     }
//     console.log(inner());
// }

// var a = 1;
//
// function b() {
//     a = 10;
//     return;
//     function a() {}
// }
//
// b();

// function print1234() {
//     console.log(1);
//     setTimeout(() => console.log(2), 100);
//     setTimeout(() => console.log(3), 0);
//     return new Promise(res => res()).then(res => setTimeout(()=>console.log(5),0))
// }
// print1234();
//
// console.log(4);
// for (let i = 1; i <= 5; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 0);
// }
// for (var i = 1; i <= 5; i++) {
//     ((i) => {
//         setTimeout(() => {
//             console.log(i);
//         }, 0)
//     })(i)
// }
// for (var i = 1; i <= 5; i++) {
//     (() => {
//         var j = i
//         setTimeout(function () {
//             console.log(j);
//         }, 0)
//     })()
// }
// ((e)=>{
//     e.stopPropagation()
//     e.stop
// })()
// console.log(typeof ("" + 1 + 0))
// console.log("" - 1 + 0)
// console.log("2" * "3")
// console.log(2 && 5)
// console.log(5 || 0)
// console.log(null + 1)
// console.log(undefined + 1)
// console.log(['x'] == 'x')
// console.log()
// const arr = [1,3,4,5,6]
// const obj = {
//     1: 9,
//     2: 8,
//     3: 7
// }
//
// for (let value in obj){
//     console.log(value)
// }


// //===============================================
// const input1 = [1, 2, 2, 1]
// const input2 = [2, 2]
// // Output: [2,2]
//
// const input3 = [4, 9, 5]
// const input4 = [9, 4, 9, 8, 4]
// // Output: [4,9] or [9, 4]
//
// const intersect = function (num1, num2) {
//     let result = []
//
//     let map = num1.reduce((acc, i) => {
//         acc[i] = acc[i] ? acc[i] + 1 : 1;
//         return acc;
//     }, {});
//
//     for (let i = 0; i < num2.length; i++) {
//         const current = num2[i];
//         let count = map[current];
//
//         if(count && count > 0){
//             result.push(current);
//             map[current] -= 1;
//         }
//     }
//
//     return result
// }
// console.log(intersect(input1, input2))
// console.log(intersect(input3, input4))

// let str = 'bar';
// str[0] = 'v';
// console.log(str[0])
//
// let obj = { 1: 90}
//
// obj['1'] = 80
// console.log(obj)

let timeToExit = (time)=> (new Date).getTime() + time;

const timer = (time) => {
    const fixTime = timeToExit(time)
    let i = 0
    while (true) {
        i = i++;
        if ((new Date).getTime() >= fixTime) return;
    }
}

const asyncBlockTimer = async () => {
    console.log('1')
    await timer(3000)
    console.log('2')
}

asyncBlockTimer()





































