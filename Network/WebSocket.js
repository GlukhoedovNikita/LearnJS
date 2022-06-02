// WebSocket - это специальный протокол, который позволяет устанавливать быстрое соединение с сервером
// Очень часто использую при разрабоктке чатов

const webSocket = new WebSocket('url')

// У WebSocket есть всего 4 события

// open – соединение установлено,
// message – получены данные,
// error – ошибка,
// close – соединение закрыто.

// И два метода send - отправить, close - закрыть текущие соединение
// Иногда создают отдельный сервер под WebSocket запросы и используют его параллельно с обычным, они не должны 
// конфликтовать при запросам к вашей БД.

webSocket.onopen = () => {
    console.log('WebSocket открыт!')
}
webSocket.onmessage = (event) => {
    console.log(event.data) // Получили данные от сервера
}
webSocket.onerror = (e) => {
    console.log(`Произошла ошибка - ${e}`)
}
webSocket.onclose = () => {
    console.log('WebSocket закрыт')
}

setInterval(() => {
    const data = [
        {
            name: 'Pete',
            money: 1000,
        },
        {
            name: 'Pete',
            money: 1000,
        },
    ]
    if (data.length) webSocket.send(data) // Отправляем данные на сервер
    else webSocket.close() // Закрыли вебсокет
}, 100)