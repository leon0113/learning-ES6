const numbers = [23, 285, 585, 639, 385, 5];

// console.log(...numbers);

const maxInArray = Math.max(...numbers);
// console.log(maxInArray);

const numbers2 = [48, ...numbers, 22];
numbers.push(55);
console.log(numbers);
console.log(numbers2);
