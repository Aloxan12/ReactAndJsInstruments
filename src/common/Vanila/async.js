








// A
// setTimeout(function(){
    //B
// },1000)
// C
// 1. Выполнить А
// 2. Установить таймер на 1000 миллисекунд
// 3. Выполнить С
// 4. Когда дошла очередь(прошло 1000 миллисекунд) выполнить B



// Последовательность выполнения
// doA(function(){
//     doB()
//     doC(function (){
//         doD()
//     })
//     doE()
// })
// doF()
//
// doA() => doF() => doB() => doC() => doE() => doD()




// function result (data){
//     console.log('a')
// }
// var a = 0
// ajax('url...', result)
// a++

// console.log('1')
// new Promise((resolve, reject)=> {
//     console.log('2')
//     return resolve(2)
// }).then(()=> console.log('4'))
// console.log('3')

p.then(()=>{
    p.then(()=>{
        console.log('C')
    })
    console.log('A')
})
p.then(()=>{
    console.log('B')
})
// A B C