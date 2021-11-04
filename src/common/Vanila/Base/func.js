// const arrow =()=>{
//     console.log('this in arrow function', this);
// }
// arrow()
//
// let obj ={name: 'Evgen'};
//
// obj.a = arrow;
// obj.a()

// let obj = {
//     name: 'Alex',
//     f(){
//         console.log('this in FD', this) //Alex
//     },
//     a:()=>{
//         console.log('this in arrow', this) //window т.к. обьект не создает область видимости
//     }
// }
// obj.f()
// obj.a()

// let obj = {
//     name: 'Evgen',
//     f(){
//         console.log('this is FD', this);
//         return ()=>{
//             console.log('this in arrow f', this)
//         }
//     }
// }
//
// let a = obj.f()
// a()
// let obj = {
//     name: 'Evgen',
//     f:()=>{
//         console.log('this in arrow f', this) //window
//         return function (){
//             console.log('this is FD', this); //window
//         }
//     }
// }

// let obj = {
//     name: 'Alex',
//     f(){
//         setTimeout(()=>{
//             console.log('arrow', this) //Alex
//         }, 0);
//         setTimeout(function (){
//             console.log('FD', this) //Window
//         }, 0)
//     }
// }
// obj.f();

// let obj = {
//     name: 'Evgen',
//     sayName(a1, a2){
//         console.log(this.name, a1)
//     }
// }
// let obj2 = {
//     name: 'Helen'
// }
// let obj3 = {
//     name: 'Adam'
// }
// let result = obj.sayName.bind(obj3, 100).bind(obj2, 200)
// result();

const person = {
    name: 'Alex',
    age: 26,
    sayHello: () => {
        console.log('Arrow ' + this.name)
    }
}
console.log(person.sayHello())
const person2 = {
    name: 'Alex',
    age: 26
}
// const arrFn =()=>{
//     return console.log('Arrow' + this.name)
// }

