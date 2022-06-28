function *foo(x, y){
    return x * y
}
const it = foo(6,7)

console.log(it.next())