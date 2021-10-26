
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
        const unicId = Date.now().toString();

        context[unicId] = fn
        const result = context[unicId]()(...rest.concat(args))

        delete context[unicId]

        return result
    }
}
























