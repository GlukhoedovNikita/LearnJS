// 1. 
// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:

const ucFirst = (str) => {
    if (!str) return str

    return `${str[0].toUpperCase()}${str.slice(1, str.length)}`
}

console.log(ucFirst('asd'))
console.log(ucFirst('john'))

// 2.
// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.
// Функция должна быть нечувствительна к регистру:

const checkSpam = (str) => {
    return str.toLowerCase().includes('viagra') || str.toLowerCase().includes('xxx')
}

console.log(checkSpam('xxxsjdfj'))
console.log(checkSpam('asdviagra'))
console.log(checkSpam('john'))

// 3.
// Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.
// Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.

const truncate = (str, maxLenght) => {
    if (str.length <= maxLenght) {
        return str
    } else {
        return `${str.slice(0, maxLenght - 2)}...`
    }
}

console.log(truncate('asdfsasdfs', 9))
console.log(truncate('asdfsasdfs', 10))

// 4.
// Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.
// Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.

const extractCurrencyValue = (str) => {
    return +str.slice(1)
}

console.log(extractCurrencyValue('$120'))
console.log(typeof extractCurrencyValue('$120'))
console.log(extractCurrencyValue('$150'))
console.log(typeof extractCurrencyValue('$150'))