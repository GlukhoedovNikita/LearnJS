// 1.
// Здесь мы делаем два счётчика: counter и counter2, используя одну и ту же функцию makeCounter.
// Они независимы? Что покажет второй счётчик? 0,1 или 2,3 или что-то ещё?

const makeCounter = () => {
    let count = 0

    return () => {
        return count++
    }
}

const counter = makeCounter()
const counter1 = makeCounter()

console.log(counter()) // 0
console.log(counter()) // 1

console.log(counter1()) // 0
console.log(counter1()) // 1

// Так просиходит потому что counter и counter1 независимо вызывают функцию, а для каждой функции создается свое 
// лексическое окружение поэтому значения именно такие

// 2.
// Здесь объект счётчика создан с помощью функции-конструктора.
// Будет ли он работать? Что покажет?

function Counter() {
    let count = 0

    this.up = function() {
        return ++count
    }

    this.down = function() {
        return --count
    }
}

const conter2 = new Counter()

console.log(conter2.up()) // 1
console.log(conter2.down()) // 0
console.log(conter2.down()) // -1

// Так происходит из-за того что используется префиксная форма декримента, так же при создание counter2 у нас появляется
// лексическое окружение нашей функции-конструктора в котором меняется переменная count.

// 3.
// Посмотрите на код. Какой будет результат у вызова на последней строке?

const phrase = 'Hello'

if (true) {
    const user = 'John'

    const sayHi = () => {
        cocnsole.log(phrase, user)
    }
}

sayHi() // Error

// Мы получаем ошибку потому что блок if создает свою область видимости, таким образом мы не может из вне получить доступ
// к функции, которая обьявлена в том блоке видимости. Глобально функции sayHi просто несуществует.

// 4.
// Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.
// Да, именно таким образом, используя двойные круглые скобки (не опечатка).

const sum = (a) => {
    return (b) => {
        return a + b
    }
}

console.log(sum(1)(2))

// Без комментариев, написанно что имеем такую возможность благодаря замыканию.

// 5.
// У нас есть встроенный метод arr.filter(f) для массивов. Он фильтрует все элементы с помощью функции f. Если она возвращает true, то элемент добавится в возвращаемый массив.

// Сделайте набор «готовых к употреблению» фильтров:

// inBetween(a, b) – между a и b (включительно).
// inArray([...]) – находится в данном массиве.
// Они должны использоваться таким образом:

// arr.filter(inBetween(3,6)) – выбирает только значения между 3 и 6 (включительно).
// arr.filter(inArray([1,2,3])) – выбирает только элементы, совпадающие с одним из элементов массива

const inBetween = (start, end) => {
    return (x) => {
        return x >= start && x <= end
    }
}

const inArray = (arr) => {
    return (x) => {
        return arr.includes(x)
    }
}

console.log([1, 2, 3, 4, 0].filter(inArray([0, 1])))
console.log([1, 2, 3, 4, 0].filter(inBetween(0, 3)))

// Сначала не особо понял че тут происходит, у нас есть встроенных метод filter он принимает каллбэк 
// при вызове функций inBetween и inArray они возвращают тот самый каллбэк, который принимает метод filter
// в нем мы и пишем логику. 

// 6.
// У нас есть массив объектов, который нужно отсортировать:

const users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" },
]

const byField = (fieldName) => {
    return (a, b) => {
        if (typeof a[fieldName] === 'number' && typeof b[fieldName] === 'number') return b[fieldName] - a[fieldName] 
        else return b[fieldName] > a[fieldName]
    }
}

console.log(users.sort(byField('name')))
console.log(users.sort(byField('age')))

// Смысл в том чтобы проверить что мы сортируем числа или нет, после этого сортировать
// Опять же функции нам возвращают каллбэк который принимает функция sort