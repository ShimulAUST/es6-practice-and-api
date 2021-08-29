const numbers = [5, 13, 44, 11, 225, 415, 115, 2];
const bigNumbers = numbers.filter(number => number > 20);
console.log(bigNumbers);

console.log(numbers.filter(number => number == 13))
console.log(numbers.find(number => number == 13))