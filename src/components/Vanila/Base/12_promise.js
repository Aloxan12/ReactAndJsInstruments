console.log('Request data')

setTimeout(() => {
    console.log('Preparing data')

    const backendData = {
        server: 'aws',
        port: 2000,
        status: 'working'
    }

    setTimeout(() => {
        backendData.modified = true
        console.log('Data received', backendData)
    }, 2000)
}, 2000)

const p = new Promise((res, rej) => {
    setTimeout(() => {
        console.log('Preparing data')
        const backendData = {
            server: 'aws',
            port: 2000,
            status: 'working'
        }
        res(backendData)
    }, 2000)
})

p.then((data) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            data.modified = true
            res(data)
        }, 2000)
    })
})
    .then(clientData => {
        console.log('Data received', clientData)
        return clientData
    })
    .then(data => {
        console.log('Modification', data)
    })
    .catch(error => console.log('Error: ', error))
    .finally(()=> console.log('Finally'))


const sleep = ms =>{
    return new Promise(res =>{
        setTimeout(()=>res(), ms)
    })
}
sleep(2000).then(()=> console.log('After 2 sec'))
sleep(3000).then(()=> console.log('After 3 sec'))

Promise.all([sleep(2000), sleep(5000)])
    .then(()=> console.log('All promises'))

Promise.race([sleep(2000), sleep(5000)]).then(()=>{
    console.log('Race promises')
})

console.log(1)
setTimeout(()=>{
    console.log(2)
}, 0)
const prom = new Promise((res, rej)=>{
    console.log(3);

    //return console.log(4);
})
console.log(5);

const p1 = new Promise((res)=>{
    return res(12)
})
p1.then((res)=>{
    return console.log(res)
})










