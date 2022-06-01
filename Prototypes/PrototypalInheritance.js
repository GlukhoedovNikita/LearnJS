// Все обьекты в JavaScript имееют скрытое свойства [[Prototype]] оно обьект или null
// Обратиться к этому свойству мы можем с помощью __proto__
// Это устаревшая консрукция сейчас используется другое, рассмотрим далее

// 1.
// В приведённом ниже коде создаются и изменяются два объекта.
// Какие значения показываются в процессе выполнения кода?

const animal = {
    jumps: null
}

const rabbit = {
    __proto__: animal,
    jumps: true,
}

console.log(rabbit.jumps) // true

delete rabbit.jumps
console.log(rabbit.jumps) // null

// Выводиться null потому что мы наследуемся от animal, у которого есть свойство jumps: null.

delete animal.jumps
console.log(rabbit.jumps) // undefined

// Свойства jumps нет ни в обьекте ни в прототипе

// 2.
// Задача состоит из двух частей.
// У нас есть объекты:

// С помощью свойства __proto__ задайте прототипы так, чтобы поиск любого свойства выполнялся по следующему пути: pockets → bed → table → head. Например, pockets.pen должно возвращать значение 3 (найденное в table), а bed.glasses – значение 1 (найденное в head).
// Ответьте на вопрос: как быстрее получить значение glasses – через pockets.glasses или через head.glasses? При необходимости составьте цепочки поиска и сравните их.\

const head = {
    glasses: 1,
}

const table = {
    pen: 3,
    __proto__: head
}

const bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table
}

const pockets = {
    money: 2000,
    __proto__: bed
}

console.log(pockets.pen) // 3

// Быстее свойство glasses можно получить через head, нежели чем через pockets, потому что glasses является непосредственно
// свойством обьекта head, а pockets получает его из своего прототипа 

// 3.
// Объект rabbit наследует от объекта animal.
// Какой объект получит свойство full при вызове rabbit.eat(): animal или rabbit?

const animal1 = {
    eat() {
        this.full = true
    }
}

const rabbit1 = {
    __proto__: animal1,
}

rabbit1.eat()
console.log(animal1, rabbit1)

// При вызове функции у rabbit обьект rabbit получит свойство full, с обьектом animal ничего не произойдет в этот момент

// 4.
// У нас есть два хомяка: шустрый (speedy) и ленивый (lazy); оба наследуют от общего объекта hamster.
// Когда мы кормим одного хомяка, второй тоже наедается. Почему? Как это исправить

const hamster = {
    stomach: [],
    eat(food) {
        this.stomach = food
    }
}

const lazy = {
    __proto__: hamster,
}


const speedy = {
    __proto__: hamster,
}

lazy.eat('Яблоко')
speedy.eat('Банан')

console.log(lazy, speedy, hamster)