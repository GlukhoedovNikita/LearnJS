// Как мы знаем нам может потребовать выполнить несколько действий последовательно даже при ассинхронном коде
// Промисы позволяют нам это сделать

new Promise((resolve, reject) => {
    const item = 10
    resolve(item)
}).then((item) => ++item).then((item) => ++item).then((item) => console.log(item))

// Например таким образом с помощью then