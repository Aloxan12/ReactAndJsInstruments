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
//     const newArr = arr.reduce((acc, item)=> ({...acc, [item.id]:item.title}),{})
//     return newArr
// }
// console.log(mapper(exampleArray)); // { '2': 'Two', '3': 'Three', '1': 'One' }

// const arr = [2, 2, 2, 3] // [7, 5, 8]
// const sumArr = (arr)=>{
//     const newArr = arr.map((n, index)=> arr.filter((num, index2)=> index2 !==index)).map(ar => ar.reduce((acc, el)=> acc+ el, 0))
//     return newArr
// }
// console.log(sumArr(arr))

// const arr = [
//     {id: [{name: "1"}, {name: "2"}], num: "1"},
//     {id: [{name: "0"}], num: "2"},
//     {id: [{name: "1"}], num: "3"},
//     {id: [{name: "1"}, {name: "2"}], num: "4"},
//     {id: [{name: "1"}, {name: "2"}], num: "5"}
// ];
// function callArr(arr) {
//     const result = arr.filter(obj => obj.id.some(ar => ar.name === "2"))
//     return result
// }
// console.log(callArr3(arr));
// const array1 = ["one"];
// const array2 = ["two", "three"];
// const array3 = ["one", "two", "three", "six"];
// const array4 = [];
//
// const obj = {
//     one: ["testOne1", "testOne2"],
//     two: ["testTwo1", "testTwo2"],
//     three: ["testThree1", "testThree2"],
//     four: ["testFour1", "testFour1"],
//     five: ["testFive1", "testFive1"],
//     six: ["testSix1", "testSix2"],
//     seven: ["testSeven1", "testSeven1"]
// }
// const myFunc = (arr, data) => {
//     const newArr2 = arr.reduce((acc, item)=> [...acc, data[item]], []).reduce((acc, item)=> [...acc, ...item], [])
//     return newArr2
// };
//console.log(myFunc(array1, obj)); // return ['testOne1', 'testOne2']
//console.log(myFunc(array2, obj)); // return ['testTwo1', 'testTwo2', 'testThree1', 'testThree2']
//console.log(myFunc(array3, obj)); // return ['testOne1', 'testOne2', 'testTwo1', 'testTwo2', 'testThree1', 'testThree2', 'testSix1', 'testSix2']
//console.log(myFunc(array4, obj)); // return []


let strin = 'Lets go to the movies'
let strin2 = 'Why isn\'t my code working?'


function format(str) {
    const s = str.length;
    const chars = str.split('');
    const strWithSpaces = chars.reduceRight((acc, char, i) => {
        const spaceOrNothing = ((((s - i) % 1) === 0) ? ' ' : '');
        return (spaceOrNothing + char + acc);
    }, '');
    let result = ((strWithSpaces[0] === ' ') ? strWithSpaces.slice(1) : strWithSpaces).toUpperCase();
    return result.replace(/ +/g, ' ').trim()
}

console.log(format(strin2))