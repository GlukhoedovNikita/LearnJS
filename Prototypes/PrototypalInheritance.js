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