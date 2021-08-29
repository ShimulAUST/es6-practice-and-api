const fish = { id: 58, name: 'king hilsha', price: 9000, mobile: '01842545652', address: 'chandpur', dress: 'silver' };

// const mobile = fish.mobile;
// const name = fish.name;
// const price = fish.price;
// console.log(mobile, name, price);

//destructuring
const { mobile, price, name } = fish;

console.log(mobile);