// var item = 'item'
// const fn =()=>{
//     var item = 'lol'
//     console.log('item', item) //lol
// }
// console.log('item', item) //item
// fn()//lol


//================ hosting

// greeting = 'hello'
// console.log(greeting) // 'hello'
// var greeting = 'hi'
// console.log(greeting)// hi

// fnVar() //TypeError потому что в данный момент fnVar инициализируется\читается как undefined, а вызвать можно только функию
// var fnVar = function (){}

// fn() //Если функция вызвана с помощь кличевого слова function, тогдамы можем ее вызывать до того, как объявили
// function fn(){
//     console.log('Поднимается!!')
// }


// Нельзя повторно обявить переменную в одной обасти видимости
// var studentName = "Frank";
// console.log(studentName); // Frank
// var studentName;
// console.log(studentName); // Frank <--- все равно!
// // добавим явную инициализацию
// var studentName = undefined;
// console.log(studentName); // undefined <--- видите!?

// С функцией
// var greeting;
// function greeting() {
//     console.log("Hello!");
// }
// // по сути пустая операция
// var greeting;
// typeof greeting; // "function"
// var greeting = "Hello!";
// typeof greeting; // "string"


// let и const е разрешают объявлять переменную с одним именени в одной области видимости
// var studentName = "Frank";
// let studentName = "Suzy";



// askQuestion(); // ReferenceError для let, а для var будет 'undefined, do you know?'
//
// let studentName = "Suzy";
// function askQuestion() {
//     console.log(`${ studentName }, do you know?`);
// }


// var name = 'Ali'
// {
//     console.log(name) // ReferenceError
//     let name = 'Alex'
//     console.log(name)
// }


// let num = 10
// if(num === 10){
//     let str = 'let'
//     var str2 = 'var'
// }
// function fn(){
//     var str3 = 'lol'
// }
// console.log(str) // ReferenceError
// console.log(str2) // 'var'
//console.log(str3) // // ReferenceError



// if (false) {
//     function ask() {
//         console.log("Does this run?");
//     }
// }
// ask(); // TypeError при false и сработает при true













// ================ Теория поднятия

// Метафора поднятия
// Если мы объявим такой код
// studentName = "Suzy";
// greeting();
// // Hello Suzy!
// function greeting() {
//     console.log(`Hello ${ studentName }!`);
// }
// var studentName;
// То js перед папуском его преобразует в такой, потому, что объявления функций поднимаются первыми
// function greeting() {
//     console.log(`Hello ${ studentName }!`);
// }
// var studentName;
// studentName = "Suzy";
// greeting();
// // Hello Suzy!