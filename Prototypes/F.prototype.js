// Можно создавать и наследовать обьекты с помощью функций-конструкторов
// Надо запомнить что prototype является свойством для прототипа только при создание обьекта с
// помощью функции конструктора в других же случаях это обычное свойство

const animal = {
    eats: true,
}

function Rabbit(name) {
    this.name = name
}

Rabbit.prototype = animal
const rabbit = new Rabbit('Name..')

console.log(rabbit.eats)

// 1.
// В коде ниже мы создаём нового кролика new Rabbit, а потом пытаемся изменить его прототип.

function Rabbit1() {}
Rabbit1.prototype = {
    eats: true,
}

const rabbit1 = new Rabbit1()
console.log(rabbit1.eats) // true

Rabbit1.prototype = {}
console.log(rabbit1.eats) // true потому что мы не пересоздали обьект

const rabbit2 = new Rabbit1()
console.log(rabbit2.eats) // undefined

delete rabbit1.eats
console.log(rabbit1.eats) // true - потому что мы удаляем свойство в обьекте но прототип у него всего равно остается 
                          // из него и берется свойство eats

delete Rabbit1.prototype.eats
console.log(rabbit1.eats) // true потмоу что мы не пересоздали обьект