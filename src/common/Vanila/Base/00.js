// function newBind2(fn, context, ...args1) {
//     return ()=>{
//         return fn.apply(context, [...args1])
//     }
// }
//
// function sum(a, b) {
//     a = 5
//     return function (){
//         b = 10
//         return a+b
//     }
// }

// function Animal(name, age){
//     this.name = name
//     this.age = age
// }
// Animal.prototype.GetNameAge = function (){
//         return this.name + this.age
// }
// const dog = new Animal('Bob', 5)
// console.log(dog.GetNameAge())

// exampleArray = [{id: 2, title: 'Two'}, {id: 3, title: 'Three'}, {id: 1, title: 'One'}];
// function mapper(arr) {
//     const newArr = arr.map(obj => Object.values(obj))
//     // const obj = newArr.reduce((acc, cur, i)=>
//     //     acc[i]= cur, {});
//     return newArr
// }
// console.log(mapper(exampleArray)); // { '2': 'Two', '3': 'Three', '1': 'One' }
// const arr = [2, 2, 2, 3] // [7, 5, 8]
//
// const sumArr = (arr)=>{
//     const newArr = arr.map((n, index)=> arr.filter((num, index2)=> index2 !==index)).map(ar => ar.reduce((acc, el)=> acc+ el, 0))
//     return newArr
// }
// const sumArr2 = (arr)=>{
//     let newArr = 0
//     for(let i=0; i < arr.length; i++){
//         newArr = arr.reduce((acc, el)=> acc+ el, 0)
//     }
//     return newArr;
// }
//
//
// console.log(sumArr(arr))




const arr = [
    { id: [{ name: "1" }, { name: "2" }], num: "1" },
    { id: [{ name: "0" }], num: "2" },
    { id: [{ name: "1" }], num: "3" },
    { id: [{ name: "1" }, { name: "2" }], num: "4" },
    { id: [{ name: "1" }, { name: "2" }], num: "5" }
];

function callArr(arr) {
    const newArr = arr.map((obj, index) => {
        const filteredObj = obj.id.filter(ar => ar.name === '2')
        return filteredObj
    })
    return newArr
}

console.log(callArr(arr));

// console.log(callArr(arr));
// function callArr(arr){
//     const newArr = arr.map((obj, index)=> {
//         for (let key in obj) {
//             return obj[key]
//         }
//     }).map((ar, i) => ar.filter(a => a.name === '2'))
//     return newArr
// }
// function callArr2(arr){
//     const result = []
//     const newArr = arr.map(obj =>{
//         for (let key in obj) {
//             return obj[key].filter((ar, i) => ar[i].name === '2')
//         }
//     })
//     return result
// }

console.log(callArr(arr))
