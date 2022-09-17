// for 2 parameter
const add = (num1, num2) => num1 + num2;
const sum = add(20, 50);
console.log(sum);

// for 3 parameter
const multiply = (num1, num2, num3) => num1 * num2 * num3;
const result = multiply(5, 6, 2);
console.log(result);

// for 1 parameter
const fiveTimes = num => num * 5;
const value = fiveTimes(40);
console.log(value);

// for 0 parameter
const getName = () => 'Leon';
const name = getName();
console.log(name);

//for multiLine operation
const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    const output = result * 5;
    return output;
}

const total = doMath(5, 6);
console.log(total);
