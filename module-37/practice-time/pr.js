// array-methods
const furniture = [
    { name: 'Table', brand: 'wood', color: 'dark', price: 200000 },
    { name: 'Chair', brand: 'wood', color: 'light', price: 300000 },
    { name: 'Bookshelf', brand: 'wood', color: 'gray', price: 500000 },
    { name: 'Window', brand: 'wood', color: 'ass', price: 15000 },
    { name: 'Dor', brand: 'wood', color: 'dep-dark', price: 10000 }
];

//map
const names = furniture.map(item => item.name);
const prices = furniture.map(item => item.price);
const colors = furniture.map(item => item.color);
// console.log(names);
// console.log(prices);
// console.log(colors); 

// 2 forEach
// furniture.forEach = (item => console.log(item.name));
furniture.forEach(item => {
    // console.log(`Name: ${item.name}, Brand: ${item.brand}, Color: ${item.color}, Price: ${item.price}`);
});

// 3 filter
const cheapItem = furniture.filter(product => product.price <= 400000)
// console.log(cheapItem)

// 4 find
const items = furniture.find(item => item.color.includes('gray'));
const items2 = furniture.find(item => item.color.includes('dark'));
// console.log(items);
// console.log(items2);
