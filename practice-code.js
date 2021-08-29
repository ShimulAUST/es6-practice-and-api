//let and const
const hubby = 'Omor Sani';
let phone = 'iPhone 15';
phone = 'Samsung Galaxy S17';
//default parameter and spread operator(...)
function maxNumber(array = []) {
    const max = Math.max(...array);
    return max;
}
const biggest = maxNumber();
console.log(biggest);

//template string
let id = 160204014;
const myNotes = `Hi I am Shimul Paul.
My id is ${id}.
I am from AUST.
`;
console.log(myNotes);

//arrow function
const square = x => x * x;

console.log(square(5));