function* strGenerator() {
    yield 'Hello'
    yield 'e'
    yield 'l'
    yield 'l'
    yield 'o'
}

const str = strGenerator()
console.log(str.next().value);

function* numberGen(n = 10) {
    for (let i = 0; i < n; i++) {
        yield i
    }
}

const num = numberGen(5)

const iterator = {
    [Symbol.iterator](n = 10) {
        let i = 0
        return {
            next(){
                if(i<n){
                    return{ value: ++i, done: false}
                }
                return {value: undefined, done: true}
            }
        }
    }
}

function* iter(n=10){
    for (let i = 0; i< n; i++){
        yield i
    }
}

for (let k of iter(3)){
    console.log(k)
}
// for (let k of [22,1,32, 32, 23, 1, 2, 3, 1]){
//     console.log(k)
// }




