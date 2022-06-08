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



// ================ Теория поднятия
// Если мы объяим такой код
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