// 1.
// Напишите деструктурирующее присваивание, которое:
// свойство name присвоит в переменную name.
// свойство years присвоит в переменную age.
// свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)

const user = {
    name: 'John',
    years: 18,
    isAdmin: true,
}

const {name, years: age, isAdmin = false} = user

console.log(name, age, isAdmin)

// 2.
// У нас есть объект salaries с зарплатами:
// Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.
// Если объект salaries пустой, то нужно вернуть null.
// Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
// P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.

const salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250,
}

const topSalary = (obj) => {
    return Object.entries(obj).sort((a, b) => b[1] - a[1])[0][0]
}

console.log(topSalary(salaries))