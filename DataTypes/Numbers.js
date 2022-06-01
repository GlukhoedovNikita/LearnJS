// 1.
// Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.

const sum = (a, b) => a + b;
console.log(sum(1, 2))

// 2.
// Методы Math.round и toFixed, согласно документации, округляют до ближайшего целого числа: 0..4 округляется в меньшую сторону, тогда как 5..9 в большую сторону.

console.log(1.35.toFixed(1))
console.log(6.35.toFixed(1))
console.log(Math.round(6.35 * 10) / 10)

// 3.
// Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт.
// Функция должна возвращать числовое значение.
// Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку или нажав «Отмена». В этом случае функция должна вернуть null.

const readNumber = (a) => {
    let sum = 0
    if (Number(a) === a) {
        return sum += a
    } else {
        return sum
    }
}
console.log(readNumber(5))
console.log(readNumber(null))

// 4.
// Этот цикл – бесконечный. Он никогда не завершится, почему?

// let i = 0;
// while (i != 10) {
//   i += 0.2;
// }

let i = 0
while (i != 10) {
    i += 0.2
}

// Цикл и правда будет бесконечный из-за неточности чисел в JavaScipt i никогда не будет равно 10

// 4.
// Встроенный метод Math.random() возвращает случайное число от 0 (включительно) до 1 (но не включая 1)
// Напишите функцию random(min, max), которая генерирует случайное число с плавающей точкой от min до max (но не включая max).

const _random = (min, max) => {
    return Math.random() * (max - min)
}

console.log(_random(1, 5))
console.log(_random(1, 10))

// Напишите функцию randomInteger(min, max), которая генерирует случайное целое (integer) число от min до max (включительно).
// Любое число из интервала min..max должно появляться с одинаковой вероятностью.

const randomInteger = (min, max) => {
    return Math.floor(min + Math.random() * (max - min + 1))
}

console.log(randomInteger(1, 3))
console.log(randomInteger(1, 6))