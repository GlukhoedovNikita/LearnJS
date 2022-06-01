'use strict'
// 1.
// Что выведет следующий код?

// let fruits = ["Яблоки", "Груша", "Апельсин"];

// let shoppingCart = fruits;
// shoppingCart.push("Банан");

// alert( fruits.length ); // ?

let fruits = ["Яблоки", "Груша", "Апельсин"]
let shoppingCart = fruits

shoppingCart.push('Банан')

console.log(fruits.length)

// Данный код выведет 4 потому что массивы мы создали в переменной shoppingCart - ссылку на наш массив
// из-за этого исзодный массив при данной операции тоже измениться.

// 2.
// Давайте произведём 5 операций с массивом.

// Создайте массив styles с элементами «Джаз» и «Блюз».
// Добавьте «Рок-н-ролл» в конец.
// Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
// Удалите первый элемент массива и покажите его.
// Вставьте Рэп и Регги в начало массива.

const styles = ['Джаз', 'Блюз']

styles.push('Рок-н-ролл')
styles[Math.floor(styles.length - 1) / 2] = 'Классика'
console.log(styles.shift())
styles.unshift('Рэп')
styles.unshift('Регги')

console.log(styles)


// 3.
// Каков результат? Почему?

// let arr = ["a", "b"];

// arr.push(function() {
//   alert( this );
// });

// arr[2](); // ?

const arr = ['a', 'b']

arr.push(function() {
    console.log(this)
})

console.log(arr[2]())

// this будет undefined - почему хз...

// 4.
// Напишите функцию sumInput(), которая:

// Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
// Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// Подсчитывает и возвращает сумму элементов массива.
// P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».

const sumInput = (arr) => {
    let sum = 0
    for (let value of arr) {
        if (value !== +value) return sum
        sum += value
    }
    return sum
}

console.log(sumInput([1, 2, 3, 'sd', 5]))

// 5.
// На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].
// Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.
// Функция getMaxSubSum(arr) должна возвращать эту сумму.

const getMaxSubSum = (arr) => {
    let maxSum = 0
    let particalSum = 0

    for (let value of arr) {
        particalSum += value
        maxSum = Math.max(particalSum, maxSum)
        if (particalSum < 0) particalSum = 0
    }

    return maxSum
}

console.log(getMaxSubSum([1, 2, 100, -1, -5]))
console.log(getMaxSubSum([-1, -5]))