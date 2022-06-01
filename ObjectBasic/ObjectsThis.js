'use strict'

// 1.
// Каким будет результат выполнения этого кода?

// let user = {
//   name: "Джон",
//   go: function() { alert(this.name) }
// }

// (user.go)()

const user = {
    name: 'John',
    go: function() {
        console.log(this.name)
    }
};

user.go(); // John
(user.go)() // John -подвох с точкой запятой если ее не будет - то ошибка

// 2.
// let obj, method;

// obj = {
//   go: function() { alert(this); }
// };

// obj.go();               // (1) [object Object]

// (obj.go)();             // (2) [object Object]

// (method = obj.go)();    // (3) undefined - при использование = теряется значение this

// (obj.go || obj.stop)(); // (4) undefined - при использование || теряется значени this



// 3.
// Каким будет результат при обращении к свойству объекта ref? Почему?

function makeUser() {
    return {
        name: 'John',
        ref: this
    }
}

const people = makeUser() // мы вызываем функцию и значение this ссылается на функцию а не на обьект
console.log(people.ref.name) // undefined - поэтому тут получаем undefined

// 4.
// Создайте объект calculator (калькулятор) с тремя методами:

// read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.

const calculator = {
    read: function(a, b) {
        this.a = a
        this.b = b
    },
    sum: function() {
        return this.a + this.b
    },
    mul: function() {
        return this.a * this.b
    },
}

calculator.read(2, 3)
console.log(calculator)
console.log(calculator.sum())
console.log(calculator.mul())

// 5.
// Реализовать обьект лесенку

const ladder = {
    step: 0,
    up: function() {
        this.step++
        return this
    },
    down: function() {
        this.step--
        return this
    },
    showStep: function() {
        console.log(this.step)
        return this
    }
}

ladder.up().up().showStep().down().up().down().down().showStep()