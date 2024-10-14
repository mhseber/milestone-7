const numbers = [9, 19, 29, 39, 49, 59, 69, 79, 89, 99];
const student = {
    name: 'MH SEBER',
    age: '24',
    hobby: 'coding'
};

// 1. template string

const about = `My name is ${student.name} age ${student.age} work ${student.hobby} serial ${numbers[3]}`;
// console.log(about)

// 2. arrow function
const getFiftyFive = () => 55;
const addSixtyFive = num => num + 65;
const isEven = x => x % 2 == 0;
const addThree = (x, y, z) => x + y + z;
const doMath = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
}

//spread operator

const newNumbers = [...numbers];
// create a new array from an older array and add an element
const currentNumbers = [...numbers, 55]
numbers.push(100);
numbers.push(100);
numbers.push(100);
console.log(numbers)
console.log(newNumbers)
console.log(currentNumbers)
