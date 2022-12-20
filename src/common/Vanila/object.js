const vlad = {name: 'Vlad'}
const obg1 = {}
const obg2 = {}
vlad[obg1] = 123
vlad[obg2] = 456
console.log(vlad[obg1]) //456
console.log(vlad) // { name: 'Vlad', '[object Object]': 456 }