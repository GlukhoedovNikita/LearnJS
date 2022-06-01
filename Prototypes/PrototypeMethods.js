// Как мы говорили ранее задание прототипа у обьекта через __proto__ считается устаревшим способ сейчас для этого есть методы

// Object.create(proto, [descriptors]) – создаёт пустой объект со свойством [[Prototype]], указанным как proto, и необязательными дескрипторами свойств descriptors.
// Object.getPrototypeOf(obj) – возвращает свойство [[Prototype]] объекта obj.
// Object.setPrototypeOf(obj, proto) – устанавливает свойство [[Prototype]] объекта obj как proto.

const obj = Object.create(null)
console.log(obj)

const animal = {
    eats: true,
}

const rabbit = Object.create(animal)
console.log(rabbit.eats) // true
console.log(Object.getPrototypeOf(rabbit)) // {eats: true}

const rabbit1 = {}
console.log(rabbit1.eats) // undefined

Object.setPrototypeOf(rabbit1, animal)
console.log(rabbit1.eats) // true


// Лучше использовать эти методы в данный момент, чем свойство __proto__
// Из всего 3 желательно запомнить