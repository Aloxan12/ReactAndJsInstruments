//Interface segregation — принцип разделения интерфейса
//«клиенты не должны зависеть от методов, которые они не используют».
// Принцип разделения интерфейсов говорит о том,
// что слишком «толстые» интерфейсы необходимо разделять на более маленькие и специфические,
// чтобы клиенты маленьких интерфейсов знали только о методах, которые необходимы им в работе.
// В итоге, при изменении метода интерфейса не должны меняться клиенты, которые этот метод не используют.


// class Animal {
//     constructor(name) {
//         this.name = name
//     }
//     walk(){
//         console.log(`${this.name} умеет ходить`)
//     }
//     swim(){
//         console.log(`${this.name} умеет плавать`)
//     }
//     fly(){
//         console.log(`${this.name} умеет летать`)
//     }
// }
//
// class Dog extends Animal{
//     fly() {
//         return null
//     }
// }
// class Eangle extends Animal{
//     swim() {
//         return null
//     }
// }
// class Whale extends Animal{
//     fly() {
//         return null
//     }
//     walk() {
//         return null
//     }
// }
//
// const dog = new Dog('Рэкс')
// dog.walk()
// dog.swim()
// dog.fly()
//
// const eagle = new Eangle('Орел')
// eagle.swim()
// eagle.fly()
// eagle.walk()
//
// const whale = new Whale('Кит')
// whale.swim()
// whale.fly()
// whale.walk()


class Animal {
    constructor(name) {
        this.name = name

    }
}
const swimmer = {
    swim(){
        console.log(`${this.name} умеет плавать`)
    }
}
const flier = {
    fly(){
        console.log(`${this.name} умеет летать`)
    }
}
const walker = {
    walk(){
        console.log(`${this.name} умеет ходить`)
    }
}

class Dog extends Animal {}
class Eagle extends Animal {}
class Whale extends Animal {}

Object.assign(Dog.prototype, swimmer, walker)
Object.assign(Eagle.prototype, flier, walker)
Object.assign(Whale.prototype, swimmer)

const dog = new Dog('Рэкс')
dog.walk()
dog.swim()

const eagle = new Eagle('Орел')
eagle.fly()
eagle.walk()

const whale = new Whale('Кит')
whale.swim()


















