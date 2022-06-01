// У каждого свойства в обьекте есть свои флаги которые обычно мы не видим, всего их 3

// writable – если true, свойство можно изменить, иначе оно только для чтения.
// enumerable – если true, свойство перечисляется в циклах, в противном случае циклы его игнорируют.
// configurable – если true, свойство можно удалить, а эти атрибуты можно изменять, иначе этого делать нельзя.

// Попробуем создать обьект их изменить у него их

const users = {
    name: 'John',
    money: 1000
}

console.log(Object.getOwnPropertyDescriptors(users)) // Показывает флаги всех свой свойств обьекта

Object.defineProperty(users, 'name', {
    writable: false,
})

users.name = 'a' // Это строчка не сработает в свойстве name останется John
console.log(users.name) // John

console.log(Object.getOwnPropertyDescriptor(users, 'name'))

// Теперь попробуем скрыть свойство 

Object.defineProperty(users, 'name', {
    enumerable: false,
})

for (let key in users) {
    console.log(key)
}
console.log(users)

// Теперь свойтво name у обьекта users невидно

// Так же существуют 3 метода которые влияют на весь обьект

// Object.preventExtensions(obj)
// Запрещает добавлять новые свойства в объект.

// Object.seal(obj)
// Запрещает добавлять/удалять свойства. Устанавливает configurable: false для всех существующих свойств.

// Object.freeze(obj)
// Запрещает добавлять/удалять/изменять свойства. Устанавливает configurable: false, writable: false 
// для всех существующих свойств.


// В общем надо запомнить что у обьектов есть флаги с помощью которых мы можем менять возможности нашего обьекта
// В некоторых ситуациях это может быть полезно