// Мы можем создать свою функцию-генератор с помощью function*

const generator = function*() {
    yield 1
    yield 2
    yield 3
    yield 4
}

console.log(generator().next()) // {done: false, value: 1}
for (let value of generator()) {
    console.log(value) // 1 2 3 4
}

// Можно например создать функция-генератор массива из определенного диапазона чисел

const generatorArray = function*(start, end) {
    for (let i = start; i <= end; i++) yield i
}

for (let value of generatorArray(5, 10)) console.log(value)

// Так же можно создать бесконечный генератор в моменте 

const bestGenerator = function*() {
    for (let i = 0; i > -1; i++) yield i
}
for (let value of bestGenerator()) console.log(value)

// Самое полезное это делать итеринруемые обькты с помощью генераторов 

const range = {
    from: 1,
    to: 10,
    *[Symbol.iterator]() {
        for (let i = this.from; i <= this.to; i++) yield i
    },
}

console.log([...range])

// Асинхронные генераторы
// Такие просто существуют не буду вдоваться в их подробности, сейчас максимально бесполезная информация