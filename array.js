const numbers = [40, 52, 63, 9, 8, 6, 55, 42];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    console.log(number);
    sum = sum + number;
    console.log(sum);
}