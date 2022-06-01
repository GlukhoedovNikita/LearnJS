// 1.
// Реализую свои методы toString, valueOf 

const user = {
    name: 'John',
    money: 1000,

    toString: function() {
        return `{name: ${this.name}}`
    },
    valueOf: function() {
        return this.money
    },

    // Не обязательный код - так работает под капотом по дефолту
    // [Symbol.toPrimitive](hint) {
    //     switch(hint) {
    //         case 'number':
    //             return this.valueOf()
    //         case 'string':
    //             return this.toString()
    //         default:
    //             return this.valueOf()       
    //     }
    // },
}

console.log(+user)
console.log(String(user))

// 2.
// Реализую свой Symbol toPrimitive, он по дефолту есть у всех обьектов, но можно задать ему собственное поведение

const people = {
    firstName: 'John',
    lastName: 'Smith',
    money: 5000,
    
    [Symbol.toPrimitive](hint) {
        return hint == 'string' 
               ? `{Full Name - ${this.lastName} ${this.firstName}}`
               : this.money + 5000 
    },
}

console.log(+people)
console.log(String(people))

// При попытке преобразовать обьект в примитив js ищет у обьекта Symbol.toPrimitive 
// и в зависимости от переменной hint которая может принимать string, default, number 
// преобразовывает исходный обьект в примитив. 