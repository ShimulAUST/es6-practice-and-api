const numbers = [4, 6, 8, 10];
const output = [];
const doubleIt = number => number * 2;

for (const num of numbers) {
    const result = doubleIt(num);
    output.push(result);
}
console.log(output);

// function doubleOld(number) {
//     return number * 2;
// }

//map
//loop through each element
//for each element call the provided function
//output
const output2 = numbers.map(doubleIt);
console.log(output2);

