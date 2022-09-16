//Arry 
const numbers = [40, 50, 3, 12, 69, 85, 25, 47];
const count = numbers.length;
numbers[2] = 6;
console.log(numbers);

console.log(count);

// function
function fullName(first, second) {
    const name = first + " " + second;
    return name;
}
const person = fullName('Tahjib', 'Leon');
console.log(person);

// Object
const bottle = { color: 'red', contains: 'water', price: 150 };
console.log(bottle);