// function Bike(model, color){
//     this.model = model;
//     this.color = color;
// }
// Bike.prototype.getDetails = function (){
//     return this.model + ' bike has ' + this.color + ' color';
// }

// class Bike {
//     constructor(model, color) {
//         this.model = model;
//         this.color = color;
//     }
//     getDetails(){
//         return this.model + ' bike has ' + this.color + ' color';
//     }
// }
// const bike = new Bike('BMX', 'Black')
//
// console.log(bike.getDetails())
// let a = 5;
// let b = 3;
// [a, b] = [b, a]
// console.log(a, b)
//
// const array = [2, -4, 32, 54, 43, 3]
//
// function findMinMax(arr){
//     const min = Math.min(...arr)
//     const max = Math.max(...arr)
//     return `min: ${min}, max: ${max}`
// }
// function findMinMax2 (arr){
//     let min = Infinity
//     let max = Infinity
//
//     arr.forEach(number => {
//         if(number < max ){
//             console.log('тут')
//             max = number
//         }
//     })
//     arr.forEach(number => {
//         if(number < min){
//             min = number
//         }
//     })
//     return `min: ${min}, max: ${max}`
// }
// console.log(findMinMax(array))
// console.log(findMinMax2(array))
//
// const string = 'hello ivan duu';
// function toUpperStr(str){
//     const firstLetter = str[0].toUpperCase()
//
//     const newStr = firstLetter + str.slice(1)
//
//     return newStr
// }
//
// console.log(toUpperStr(string))

const arrSort = [11, 5, 4, 61, 23, 66, 24, 10, 3, 7]

