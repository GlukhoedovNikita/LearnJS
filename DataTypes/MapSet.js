// 1.
// Допустим, у нас есть массив arr.
// Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.

const unique = (arr) => {
    return Array.from(new Set(arr))
}

console.log(unique([1, 1, 1, 1, 1, 2]))

// 2.
// Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.

const aclean = (arr) => {
    set = new Set()
    for (let value of arr) {
        set.add(value.toLowerCase().split("").sort().join(""))
    }
    return Array.from(set)
}

console.log(aclean(["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"]))

// 3.
// Мы хотели бы получить массив ключей map.keys() в переменную и далее работать с ними, например, применить метод .push.

const map = new Map()
map.set('A')
map.set('B')

const keys = Array.from(map.keys())
keys.push('C')

console.log(keys)