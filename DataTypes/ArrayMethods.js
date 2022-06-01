// 1.
// Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат. Метод должен понимать плюс + и минус -.

function Calculate() {
    this.method = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
    }

    this.calc = function(str) {
        const [value1, sign, value2] = str.split(' ')
        
        return this.method[sign](+value1, +value2)
    }

    this.addMethod = function(name, func) {
        this.method[name] = func
    }
}

const calculate = new Calculate()
console.log(calculate.calc('10 - 5'))
calculate.addMethod('*', (a, b) => a * b)
calculate.addMethod('**', (a, b) => a ** b)
console.log(calculate.calc('10 * 5'))
console.log(calculate.calc('10 ** 2'))

// 2.
// У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.

const users = [{name: 'Вася', age: 25,}, 
               {name: 'Петя', age: 18,}, 
               {name: 'Миша', age: 123,}]
console.log(users.map(i => i.name))

// 3.
// Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.

const people = [{name: 'Вася', age: 25,}, 
                {name: 'Петя', age: 18,}, 
                {name: 'Миша', age: 123,}]

const sortByAge = (users) => {
    return users.sort((a, b) => b.age - a.age)
}

console.log(sortByAge(people))

// 4.
// Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.
// Многократные прогоны через shuffle могут привести к разным последовательностям элементов.

const shuffle = (arr) => {
    return arr.sort(() => Math.random() - 0.5)
}

console.log(shuffle([1, 2, 3]))
console.log(shuffle([1, 2, 3]))
console.log(shuffle([1, 2, 3]))

// 5.
// Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.


const users2 = [{name: 'Вася', age: 25,}, 
                {name: 'Петя', age: 18,}, 
                {name: 'Миша', age: 123,}]

const getAverageAge = (users) => {
    return users.reduce((a, b) => a + b.age, 0) / users.length
}

console.log(getAverageAge(users2))

// 6.
// Пусть arr – массив строк.
// Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.

const unique = (arr) => {
    return Array.from(new Set(arr))
}

console.log(unique(["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"]))
