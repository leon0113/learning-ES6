// system 1
function add(num1, num2) {
    const sum = num1 + num2;
    return sum;
}
const result = add(10, 18);
console.log(result);
// system 2
function add1(num1, num2) {
    num1 + num2;
    return num1 + num2;
}
const result1 = add1(10, 20);
console.log(result1);

// system 3
const adding = function add2(num1, num2) {
    return num1 + num2;
}
const result2 = adding(40, 20);
console.log(result2);
//system 4 - anonymous function
const adding1 = function (num1, num2) {
    return num1 + num2;
}
const result21 = adding1(45, 20);
console.log(result21);

//! system 5 - arrow function

const adding2 = (num1, num2) => num1 + num2;
const result4 = adding2(50, 50);
console.log(result4);