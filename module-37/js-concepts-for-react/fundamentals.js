// 1. How to declare a variable using let and const
const fatherName = 'Hamza';
let season = 'rainy';
season = 'winter';


// 2. conditions
// 6 basic conditions: >,<, ===, !==, <=, >=
//multiple conditions: &&, ||

if (fatherName === 'Hamza' || season === 'rainy') {

}
else if (fatherName === 'Hamza') {

}
else {

};

// 3. array declare
// index,
// length, push,
const numbers = [9, 19, 29, 39, 49, 59, 69, 79, 89, 99];
numbers[0] = 10;

// 4. for loop 
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    // console.log(number)
}

// 5. function
function multiply(aa1, bb2) {
    const result = aa1 * bb2;
    return result;
}
const output = multiply(5, 5);
// console.log(output)

// 6. Object
// 3 Ways to access property by name
const student = {
    name: 'MH SEBER',
    age: '24',
    hobby: 'coding'
}

const myVariable = 'age';

console.log(student.age); //direct by property
console.log(student['age']); // access via property name string
console.log(student[myVariable]); // access via property name in a variable
