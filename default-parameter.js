//adding default value to parameter
function add(num1 = 0, num2 = 0) {
    const total = num1 + num2;
    return total;
}
const result = add(2);
console.log(result);
//full name
function fullName(first, last = 'Warning!!!NO last name added') {
    const name = first + ' ' + last;
    return name;
}
const person = fullName('Leon')
console.log(person);