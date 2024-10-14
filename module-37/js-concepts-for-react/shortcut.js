const money = 80;
let food;
if (money > 100) {
    food = 'biryani';
}
else {
    food = 'cha ka'
}

// ternary
let food1 = money < 100 ? 'biryani' : 'cha ka';
console.log(food1);