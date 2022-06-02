// Тут пришлось инициалировать проект, чтобы получить доступ к fetch.
// Никаких других пакетов использоваться тут не будет.

// AJAX - технология, которая помогает в JavaScript работать с асинхронным кодом (в том числе с запросами на сервер)

import fetch from 'node-fetch';

// Таким образом мы может сделать запрос на сервер

const func = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users', { method: 'GET' })
        const result = await response.json()
        console.log(result)
    } catch (e) {
        console.log(`Error - ${e}`)
    }
}
func()

// У метода fetch есть много опций основные поля - method, body, headers.
// Response - это ответ сервера, чтобы преобразовать его в обычный обьект мы используем метод json
// Так же есть еще методы - основные

// response.status – HTTP-код ответа,
// response.ok – true, если статус ответа в диапазоне 200-299.
// response.headers – похожий на Map объект с HTTP-заголовками.

// Методы для получения тела ответа:

// response.text() – возвращает ответ как обычный текст,
// response.json() – преобразовывает ответ в JSON-объект,
// response.formData() – возвращает ответ как объект FormData (кодировка form/multipart, см. следующую главу),
// response.blob() – возвращает объект как Blob (бинарные данные с типом),
// response.arrayBuffer() – возвращает ответ как ArrayBuffer (низкоуровневые бинарные данные),