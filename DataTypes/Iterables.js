// 1.
// Интерируемые обькты - которые можно раскрыть с помощью ... или пребрать циклом for of

const range = {
    from: 1,
    to: 5,
    [Symbol.iterator]: function() {
        return {
            current: this.from,
            last: this.to,

            next: function() {
                if (this.current <= this.last) {
                    return {done: false, value: this.current++}
                } else {
                    return {done: true}
                }
            }
        }
    }
}

console.log(...range)
for (let value of range) {
    console.log(value)
}

// Таким образом мы можем создать интегируемый обькт, сначала js ищет Symbol.iterator если он есть при 
// переборе обьекта вызывается каждый раз метод next некст функция, которая должна вернуть {done: false / true, value}
// если done === true, то перебор заказчивается

// 2.
// Так же мы можем создать обьект похожий на массив и превратить его собственно говоря в массив, таким образом перебрать

const arrayLike = {
    0: 1,
    1: 2,
    2: 4,
    3: 5,
    4: 10,
    length: 5,
}

for (value of Array.from(arrayLike)) {
    console.log(value)
}
console.log(...Array.from(arrayLike))

// Таким образом мы может добиться перебора обьекта хоть по факту это уже полноценный массив со всему его методами

// Перебираемые обьекты по умолчанию в js - это строки, массивы