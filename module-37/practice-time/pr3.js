// ES6

const numbers = [9, 19, 29, 39, 49, 59, 69, 79, 89, 99];
const student = {
    name: 'MH SEBER',
    age: '24',
    hobby: 'coding'
};
// 1. template string
const mySelf = `My Name is ${student.name} age ${student.age} hobby ${student.hobby} Serial ${numbers[2]}`;
// console.log(mySelf);

// 2. arrow function
const add = (a, b) => a * b;
// console.log(add(4, 4))

const about = a => a + a;
// console.log(about(5));

const self = () => 'Hello Programmer';
// console.log(self())

const freeFire = (Seber, Tusar) => {
    const ratul = Seber + Tusar;
    return ratul
}
// console.log(freeFire(39, 40));

const laval = [20, 10, 20, 10, 20];
const idLaval = laval.map(id => id * id);
// console.log(idLaval)

//spread operator

const newNumbers = [...laval];
// create a new array from an older array and add an element
const currentNumbers = [...laval, 55]
laval.push(100);
laval.push(100);
laval.push(100);
console.log(laval)
console.log(newNumbers)
console.log(currentNumbers)