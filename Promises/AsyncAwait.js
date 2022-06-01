// Используется почаще, чем промисы потому что синтаксис проще
// С помощью async мы можем указать что данная функция будет выполняться асинхронно
// С помощью await указать какое действие мы хотим подождать
// Так же возвращает такая функция промис

+async function() {
    try {
        console.log('Start')
        const response = await fetch('https://github.com/', {
            method: 'GET',
        })
        console.log('End')
    } catch (e) {
        console.log(`Error - ${e}`)
    } finally {
        console.log('Finnaly')
    }
}()

// Не хочу устанавливать какие-то библиотеки, fetch is not defined
// Суть этой функции, что благодаря async / await весь код выполнить последовательно как и написан