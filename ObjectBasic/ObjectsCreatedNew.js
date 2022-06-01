// 1.
// Возможно ли создать функции A и B в примере ниже, где объекты равны new A()==new B()?

const obj = {}

function A() {
    return obj
}
function B() {
    return obj
}

const a = new A()
const b = new B()

console.log(a === b)

// 2.
// Создайте функцию-конструктор Calculator, который создаёт объекты с тремя методами:

// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму введённых свойств.
// mul() возвращает произведение введённых свойств.

function Calculator() {
    this.read = function(a, b) {
        this.a = a
        this.b = b
    }
    this.sum = function() {
        return this.a + this.b
    }
    this.mul = function () {
        return this.a * this.b
    }
}

const calculator = new Calculator()
calculator.read(1, 2)
console.log(calculator)
console.log(calculator.sum())
console.log(calculator.mul())

// 3.
// Напишите функцию-конструктор Accumulator(startingValue).

// Объект, который она создаёт, должен уметь следующее:

// Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
// Метод read() использует prompt для получения числа и прибавляет его к свойству value.
// Таким образом, свойство value является текущей суммой всего, что ввёл пользователь при вызовах метода read(), с учётом начального значения startingValue.

function Accumulator(initialValue) {
    this.value = initialValue
    this.read = function(value) {
        this.value += value
        return this.value
    }
}

const accumulator = new Accumulator(1)
console.log(accumulator.read(5))