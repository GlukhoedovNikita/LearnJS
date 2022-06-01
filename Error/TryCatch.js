// В JavaScript есть обработка ошибок особенно полезно это при работате с запросами на сервер
// Так же пригодиться если вы пишете сам сервер на NodeJS

// Существует блок try catch finnaly
// В try мы оборачиваем код, где ожидаем, что может случиться ошибка
// Catch - обрабатывает саму ошибку
// Finnaly - выполняется всегда независимо была ли ошибка

try {
    console.log('Try 1')
    new Error('Ошибка')
    console.log('Try 2') // Этот код уже не выполнится
} catch (e) {
    console.log(`Error - ${e}`)
} finally {
    console.log('Finnaly')
}

// Так же мы можем использовать эту констукцию без finnaly

try {
    console.log('Try 1')
    new Error('Ошибка')
    console.log('Try 2') // Как в первом случае до сюда не дойдем
} catch (e) {
    console.log(`Error - ${e}`)
}