//__proto__
//Object.getPrototypeOf()

function Cat( name, color){
    this.name = name
    this.color = color
}

Cat.prototype.voice = function (){
    console.log(`Cat ${this.name} says name` )
}

const cat = new Cat('Kot', 'white')

console.log(Cat.prototype)
cat.voice()

//=====
function Person(){}
Person.prototype.legs = 2
Person.prototype.skin = 'white'

const person = new Person()
person.name = 'Alex'

console.log('skin' in person)
console.log(person.legs)
console.log(person.name)

console.log(person.hasOwnProperty('name'))
console.log(person.hasOwnProperty('skin'))

//Object.create();
const proto = {year: 2021}
const myYear = Object.create(proto)
console.log(myYear.year)
console.log(myYear.hasOwnProperty('year')) //false
console.log(myYear.__proto__ === proto)