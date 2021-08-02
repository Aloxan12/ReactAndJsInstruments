const people = [
    {name: 'Vika', age: 20, budget: 2000},
    {name: 'Victor', age: 30, budget: 1000},
    {name: 'Bob', age: 22, budget: 4000},
    {name: 'Jordan', age: 25, budget: 3000}
]
//
// for(let i = 0; i< people.length; i++){
//     console.log(people[i])
// }
// for(let person of people){
//     console.log(person)
// }

//forEach
people.forEach((p) => p.frend = ['Anton', 'Pasha', 'Vlad'])

//Map
const nameOfPeople = people.map(person =>`${person.name} (${person.age})`)
console.log(nameOfPeople)

//Filter
const adults = []
for(let i = 0; i< people.length; i++){
    if(people[i].age >= 18){
        adults.push(people[i])
    }
}
const adultsF = people.filter(p=> p.age >= 18)

//Reduce
let amount = 0
for(let i=0; i< people.length; i++){
    amount += people[i].budget
}

const amountR = people.reduce((total, person)=> total + person.budget, 0)

//Find
const findPerson = people.find(p=> p.name === 'Vika')

//FindIndex
const findIndex = people.findIndex(p => p.name === 'Vika')

//================
const theEnd =people
    .filter(p=> p.budget > 1000)
    .map(p=>{
        return{
            info: `${p.name}(${p.age})`,
            budget: Math.sqrt(p.budget)
        }
    })
    .reduce((total, p)=> total + p.budget, 0)
console.log(theEnd)