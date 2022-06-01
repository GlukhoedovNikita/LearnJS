// 1.
// Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.
// Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.
// Если объект salaries пуст, то результат должен быть 0.

const salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

const sumSalaries = (obj) => {
    return Object.values(obj).reduce((a, b) => a + b, 0)
}

console.log(sumSalaries(salaries))
console.log(sumSalaries({}))

// 2.
// Напишите функцию count(obj), которая возвращает количество свойств объекта:

const count = (obj) => {
    return Object.keys(obj).length
}

console.log(count({name: 'John', money: 1000}))
console.log(count({}))