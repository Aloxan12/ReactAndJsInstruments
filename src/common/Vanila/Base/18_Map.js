const obj = {
    name: 'Alex',
    age: 26,
    job: 'Barmen'
}

const entries = [
    ['name','Alex'],
    ['age','26'],
    ['job','Barmen']
]
//console.log(Object.entries(obj))
//console.log(Object.fromEntries(entries))

const map = new Map(entries)
console.log(map.get('job'))

map
    .set('newField', 42)
    .set(obj, 'Value of object')
    .set(NaN, 'NaN ??')

// map.delete('job')
// console.log(map.size)
// map.clear()

for (let [key, value] of map.entries()){
    console.log(key, value)
}
for (let val of map.values()){
    console.log(val)
}
//map.forEach((val, key,, m)=>console.log(val, key))

const array = Array.from(map)
const mapObj = Object.fromEntries(map.entries())

//=========
const users = [
    {name: 'Elena'},
    {name: 'Alex'},
    {name: 'Max'},
    {name: 'Ira'},
]
const visits = new Map()

visits
    .set(users[0], new Date())
    .set(users[1], new Date(new Date().getTime()+ 1000 * 60))
    .set(users[2], new Date(new Date().getTime()+ 5000 * 60))

function lastVisit(user){
    return visit.get(user)
}

console.log(lastVisit(users[1]))





















