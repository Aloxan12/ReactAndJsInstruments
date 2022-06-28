function *foo(x){
    let res = x * (yield)
    return res
}
const it = foo(6)
it.next()
const res = it.next(6)

console.log(res)


