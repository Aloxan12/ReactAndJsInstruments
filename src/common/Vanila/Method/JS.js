const citiesRussia = ['Moscow', 'SaintPetersburg', 'Kazan']
const citiesEurope = ['Berlin', 'Prague', 'Paris']

//spread
console.log(...citiesRussia)
console.log(...citiesEurope)
const allCities = [...citiesRussia,'New York',...citiesEurope];
//const allCities2 = citiesEurope.concat(citiesRussia)

const citiesRussianWithPopulation = {
    Moscow: 20,
    SaintPetersburg: 8,
    Kazan: 5,
    Novosibirsk: 3
}
const citiesEuropeWithPopulation = {
    Berlin: 20,
    Paris: 8,
    CR: 5,
    Italy: 3
}
console.log({...citiesRussianWithPopulation})

const numbers = [1, 8, 231, 3, 21, 42]
console.log(Math.max(...numbers))
console.log(Math.max.apply(null, numbers))

///Rest
function sum(a, b, ...arg){
    return a + b + arg.reduce((acc, el)=>acc + el, 0)
}
//!!Spread
console.log(sum(...numbers))
