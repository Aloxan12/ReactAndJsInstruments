const person = {
    name: 'Alex',
    age: 26,
    job: 'Barista'
}

const op = new Proxy(person, {
    get(target, prop) {
        console.log('Prop', prop)
        return target[prop]
    },
    set(target, prop, value) {
        if (prop in target) {
            target[prop] = value
        } else {
            throw new Error(`No ${prop} filed in target`)
        }
    },
    has(target, prop) {
        return ['age', 'name', 'job'].includes(prop)
    },
    deleteProperty(target, prop) {
        console.log('detiting...', prop)
        delete target[prop]
        return true
    }
})

//Function
const log = text => `log: ${text}`

const fp = new Proxy(log, {
    apply(target, thisArg, argArray) {
        console.log('Calling fn...')

        return target.apply(thisArg, argArray).toUpperCase()
    }
})

// Classes

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

const PersonProxy = new Proxy(Person, {
    construct(target, argArray, newTarget) {
        console.log('Construct...')

        return new Proxy( new target(...argArray),{
            get(target, prop) {
                console.log('Getting prop', prop)
                return target[prop]
            }
        })
    }
})

const p = new PersonProxy('Max', 30)

//Wrapper
const withDefaultValue = (target, defaultValue = 0)=>{
    return new Proxy(target, {
        get: (obj, prop) => (prop in obj ? obj[prop]: defaultValue)
    })
}
const position = withDefaultValue({
    x: 24,
    y:42
}, 0)

// Hidden properies
const withHiddenProps = (target, prefix = '_') => {
    return new Proxy(target, {
        has: (obj, prop) => prop in obj && !prop.startsWith(prefix),
        ownKeys: obj => Reflect.ownKeys(obj).filter(p => !p.startsWith(prefix)),
        get: (obj, prop, receiver) => (prop in receiver ? obj[prop] : void 0)
    })
}

const data = withHiddenProps({
    name: 'Vladilen',
    age: 25,
    _uid: '1231231'
})

const IndexedArray = new Proxy(Array, {
    construct(target, [args]) {
        const index = {}
        args.forEach(item => (index[item.id] = item))

        return new Proxy(new target(...args), {
            get(arr, prop) {
                switch (prop) {
                    case 'push':
                        return item => {
                            index[item.id] = item
                            arr[prop].call(arr, item)
                        }
                    case 'findById':
                        return id => index[id]
                    default:
                        return arr[prop]
                }
            }
        })
    }
})

const users = new IndexedArray([
    { id: 11, name: 'Vladilen', job: 'Fullstack', age: 25 },
    { id: 22, name: 'Elena', job: 'Student', age: 22 },
    { id: 33, name: 'Victor', job: 'Backend', age: 23 },
    { id: 44, name: 'Vasilisa', job: 'Teacher', age: 24 }
])








