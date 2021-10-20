class Person{
    constructor(firstName, lastName, age) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }
    greeting(){
        return `Всем привет я человек! Меня зовут ${this.firstName}`
    }
}

class Employee extends Person{
    constructor(firstName, lastName, age, inn, number, snils) {
        super(firstName, lastName, age);
        this.inn = inn
        this.number = number
        this.snils = snils
    }
    greeting(){
        return `Всем привет я работник! Меня зовут ${this.firstName}`
    }
}
class Developer extends Employee{
    constructor(firstName, lastName, age, inn, number, snils, language, team) {
        super(firstName, lastName, age, inn, number, snils);
        this.language = language
        this.team = team
    }
    greeting(){
        return `Всем привет я программист! Меня зовут ${this.firstName}`
    }
}

const person1 = new Person('Vlad', 'Sir', 24,)
const employee1 = new Employee('Alex', 'Shav', 26, 15,15,15)
const developer1 = new Developer('Alex', 'Galk', 28, 15,15,15, 'c#', '2')

console.log(person1.greeting())
console.log(employee1.greeting())
console.log(developer1.greeting())
