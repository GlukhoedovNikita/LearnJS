// 1.
// Измените код makeCounter() так, чтобы счётчик мог увеличивать и устанавливать значение:

// counter() должен возвращать следующее значение (как и раньше).
// counter.set(value) должен устанавливать счётчику значение value.
// counter.decrease() должен уменьшать значение счётчика на 1.
// Посмотрите код из песочницы с полным примером использования.

// P.S. Для того, чтобы сохранить текущее значение счётчика, можно воспользоваться как замыканием, так и свойством функции. Или сделать два варианта решения: и так, и так.

const makeCounter = () => {
    let count = 0

    const counter = () => {
        return count++
    }

    counter.set = value => count = value
    counter.decrease = () => count--
    
    return counter
}

const counter = makeCounter()

console.log(counter.set(10)) // 10
console.log(counter.decrease()) // 10

// У функций есть собственный обьект в котором есть несколько свойств

// Первое из них name - название нашей функции, использование этого свойства конечно вызывает вопросы

const func1 = () => {
    return 
}
console.log(func1.name) // func1

// Так же есть свойтсво length которое показывает сколько аргументов должна приминать функция

const func2 = (a, b) => {
    return
}
console.log(func2.length) // 2

// При таком синтаксисе остаточные параметры у функции никак не будет учитываться

const func3 = (a, b, ...arg) => {
    return
}
console.log(func3.length) // 2

// Мы можем создавать свои свойства

const func4 = () => {
    func4.counter++;
    return
}

func4.counter = 0
func4()
func4()

console.log(func4.counter)