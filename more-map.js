const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Latham', 'Tom henry'];

const fLengths = friends.map(friend => friend.length);

console.log(fLengths);

const products = [
    { name: 'water bottle', price: 100, color: 'blue' },
    { name: 'FLask', price: 100, color: 'black' },
    { name: 'Mug', price: 100, color: 'white' },
    { name: 'Plastic bottle', price: 100, color: 'bllla' },

];

const productNames = products.map(product => product.name);

console.log(productNames);


//foreach return lagbe na
products.forEach(product => console.log(product));