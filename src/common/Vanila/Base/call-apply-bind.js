
//bind
const person = {
    name: 'Alex'
}
function info(phone, email){
    console.log(`Имя: ${this.name}, тел: ${phone}, email: ${email}`)
}
info.bind(person)('1235', 'Alex.com')
info.bind(person, '1235')( 'Alex.com')
info.bind(person, '1235', 'Alex.com')()


//1
function bind(fn, context, ...rest){
    return fn.bind(context, ...rest)
}
//2
function bind2(fn, context, ...rest){
    return function (...args){
        const uniqId = Date.now().toString();

        context[uniqId] = fn
        const result = context[uniqId]()(...rest.concat(args))

        delete context[uniqId]

        return result
    }
}
//3 ES5
function bind3(fn, context){
    const rest = Array.prototype.slice.call(arguments)
    return function (){
        const args = Array.prototype.slice.call(arguments)
        return fn.apply(context, rest.concat(args))
    }
}
//4 ES6..
function bind4(fn, context, ...rest){
    return function (...args){
        //return fn.apply(context, rest.concat(args))
        return fn.call(context, ...rest.concat(args))
    }
}























