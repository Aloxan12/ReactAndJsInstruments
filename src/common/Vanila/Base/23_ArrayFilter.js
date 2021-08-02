const list = [1, 2, 4, 5, 6]

Array.prototype.customFilter = function (callback) {
    if (!callback || typeof callback !== 'function') {
        throw Error('The callback provided is not a function')
    }
    if (!this) {
        throw Error('Cannot call filtered on null or undefined')
    }
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        const passesTest = callback(this[i], i, this);

        if (passesTest) {
            newArray.push(this[i])
        }
    }
    return newArray;
}
const filteredList = list.customFilter(elem => elem > 3)
console.log(filteredList)