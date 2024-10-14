const products = [
    { name: 'Laptop', price: '50000', brand: 'Asos', color: 'Black' },
    { name: 'Laptop', price: '70000', brand: 'Lenovo', color: 'red' },
    { name: 'Laptop', price: '60000', brand: 'Walton', color: 'White' },
    { name: 'Laptop', price: '100000', brand: 'Hp', color: 'Green' },
    { name: 'Mac book', price: '250000', brand: 'Apple', color: 'Yellow' }
];
// 1 map
const brands = products.map(product => product.brand);
const prices = products.map(product => product.price)
// console.log(brands, prices)

// 2 forEach
products.forEach(product => console.log(product.color))

// 3 filter 
const cheap = products.filter(product => product.price <= 50000);
// console.log(cheap);

// 4 find
const special = products.find(p => p.name.includes('n'));
console.log(special);
