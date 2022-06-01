// С помощью синтаксиса new Function(str) поможно создать функцию с помощью строк

const newFunc = new Function('a, b', 'return a+b')
console.log(newFunc(1, 2)) // 3

// Так же функции созданные таким образом получают доступ к глобольному лексическому окружению, но не к родительскому

const func = () => {
    const hello = 'Hello'

    const newFunc = new Function('console.log(hello)') // функция не видит переменную hello
    newFunc()
    
    return 
}

func() // Error