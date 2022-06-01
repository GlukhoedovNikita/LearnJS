// У обьектов по сути есть два вида свойт - данные это обычные свойства с которыми мы работали
// и есть свойства - акссеторы. Это функции которые используется для получения и присвоения значений для свойст.

const user = {
    firstName: 'John', // Свойтсво с данными
    lastName: 'Smith', // Свойтсво с данными
    money: 5000, // Свойтсво с данными

    get fullName() {    
        return `${this.firstName} - ${this.lastName}`
    },
    set fullName(value) {
        [this.firstName, this.lastName] = value.split(' ')
    },
}

console.log(user.fullName) // John Simth
user.fullName = 'John2 Simth2'
console.log(user) 
console.log(user.fullName) // John2 Simth2

// Таким образом мы можем создавать собсвенные функции, которые будут срабатывать при получение или изменение свойств
// обьекта.