'use strict'
// 1.
// Напишите код, выполнив задание из каждого пункта отдельной строкой:

// Создайте пустой объект user.
// Добавьте свойство name со значением John.
// Добавьте свойство surname со значением Smith.
// Измените значение свойства name на Pete.
// Удалите свойство name из объекта.

const user = {}
user.name = 'John'
user.surname = 'Smith'
user.name = 'Pete'
delete user.name
console.log(user)

// 2.
// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

const isEmpty = (obj) => {
    for (let key in obj) {
        return false
    }
    return true
}

console.log(isEmpty({}))
console.log(isEmpty({name: 'Nikita'}))

// 3.
// Можно ли изменить объект, объявленный с помощью const? Как вы думаете?

const people = {
    name: 'John'
}

people.name = 'Pete'
console.log(people) // Да


// 4.
// У нас есть объект, в котором хранятся зарплаты нашей команды:

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

// Если объект salaries пуст, то результат должен быть 0.

const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
}

const sum = (obj) => {
    const values = Object.values(obj) 
    if (!values.length) {
        return 0
    }
    return values.reduce((a, b) => a + b)
}

console.log(sum({}))
console.log(sum(salaries))

// 5.
// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

const menu = {
    width: 200,
    height: 300,
    title: "My menu",
}

const multiplyNumeric = (obj) => {
    for (key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] *= 2
        }
    }
}

multiplyNumeric(menu)
console.log(menu)