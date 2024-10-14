// 1. JSON => stringify, parse

const student = {
    name: 'MH SEBER',
    age: 24,
    add: 'gandaria',
    hight: 6,
    weight: 70,
}
const studentJSON = JSON.stringify(student);
// console.log(student);
// console.log(studentJSON);

const studentObj = JSON.parse(studentJSON);
// console.log(studentObj)

//2. fetch
// fetch('url')
// .then(res => res.json())
// .then(data => console.log(data));

// Keys, Values
const Keys = Object.keys(student);
// console.log(Keys)
const Values = Object.values(student);
// console.log(Values)