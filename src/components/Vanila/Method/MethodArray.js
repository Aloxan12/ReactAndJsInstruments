function mapC(arr, mapCallback){
    if(!Array.isArray(arr) || !arr.length || typeof mapCallback !== 'function'){
        return []
    } else {
        let result = []
        // мы создаем массив с результатами при каждом вызове функции
        // поскольку мы не хотим менять оригинальный массив
        for(let i = 0; i < arr.length; i++){
            result.push(mapCallback(arr[i], i, arr))
            // помещаем результаты mapCallback в result
        }
        return result;
    }
}

function filter(arr, filterCallback) {
    // проверяем передаваемые параметры
    if (!Array.isArray(arr) || !arr.length || typeof filterCallback !== 'function') {
        return []
    } else {
        let result = []
        for (let i = 0; i < arr.length; i++) {
            // определяем соответствие возвращаемого результата заданному условию
            if (filterCallback(arr[i], i, arr)) {
                // помещаем значение, прошедшее фильтр, в result
                result.push(arr[i])
            }
        }
        return result
    }
}

function reduce(arr, reduceCallback, initialValue) {
    if (!Array.isArray(arr) || !arr.length || typeof reduceCallback !== 'function') {
        return []
    } else {
        // если в функцию не было передано значения initialValue, то
        let hasInitialValue = initialValue !== undefined
        let value = hasInitialValue ? initialValue : arr[0]
        // мы будем использовать первый элемент initialValue

        // затем мы перебираем массив, начиная с 1, если в функцию не передавалось значения initialValue, либо с 0, если значение было передано
        for (let i = hasInitialValue ? 0 : 1, len = arr.length; i < len; i++) {
            // затем на каждой итерации мы присваиваем результат вызова reduceCallback переменной
            value = reduceCallback(value, arr[i], i, arr)
        }
        return value
    }
}