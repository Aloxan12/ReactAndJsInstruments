const person = Object.create({
    calculateAge(){
        console.log('Age: ', new Date().getFullYear() - this.birthYear)
    }
}, {
    name: {
        value: 'Vlad',
        enumerable: true,
        writable: true,
        configurable: true
    },
    birthYear:{
        value: 1995,
        enumerable: true,
        writable: true,
        configurable: false
    },
    age:{
        get(){
            return new Date().getFullYear()-this.birthYear
        },
        set(value){
            document.body.style.backgroundColor = 'red'
            console.log('Set age', value)
        }
    }
})

person.name = 'Alex'

for(let key in person){
    console.log('Key', key, person[key])
}

















