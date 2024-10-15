// 1. array destructuring

const numbers = [10, 20];
const [x, y] = numbers;
// console.log(x, y)

function freeFire(pro, bot) {
    const player = [pro, bot];
    return player;
}
// console.log(freeFire(80, 20));

// 2. object destructuring
const mySelf = {
    name: 'MH SEBER',
    age: 24,
    add: 'gandaria',
    hight: 6,
    weight: 70,
    hobby: {
        sports: 'Football',
        read: 'Quran',
        drink: 'Water',
        pray: 'Namaj'
    }
}
const { add, weight, hight, name } = mySelf
console.log(add, weight, hight, name)