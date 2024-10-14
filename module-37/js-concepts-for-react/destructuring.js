// 1. array destructuring
const numbers = [40, 50];
// const x = numbers[0];
// const y = numbers[1];

// const [a, b] = [40,50];

const [x, y] = numbers;

function boxify(num1, num2) {
    const nums = [num1, num2];
    return nums;
}
// console.log(boxify(90, 90));

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
const { age, add } = mySelf;
console.log(mySelf)