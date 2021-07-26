function Cat(color, name){
    this.color = color
    this.name = name
}
const catFirst = new Cat('black', 'Kot')

function myNew(constructor, ...arg){
    const obj = {}
    Object.setPrototypeOf(obj, constructor.prototype)
    return constructor.apply(obj, arg) || obj
}

const catSecond = myNew( Cat, 'black', 'Kot')
