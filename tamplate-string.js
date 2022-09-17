const leon = 'tahjib';
const messi = "PSG player";
const neymar = `PSG player`;
const multiLine = `This is my first line
this is my second line
this is my third line
this is fourth line`;

const friends = ['rewt', 'wert', 'gewr', 'twrfdgewsr'];
const count = 5;
const oldHeader = '<h3 class="friend-name">Friend-5</h3>';
const oldHeader2 = '<h3 class="friend-name">Friend-' + count + '</h3>';

const new1 = `<h3 class="friend-name">Friend-${count}</h3>`
const new2 = `<h3 class="friend-name">Friend-${friends.length}</h3>`
const new3 = `<h3 class="friend-name">Friend-${friends[1]}</h3>`

const first = 'Tahjib';
const second = 'Hossain';
const fullOld = first + ' ' + second;
const fullNew = `${first}       ${second}`;
const fullNew1 = `My name is : ${first} ${second}`;
const fullNew2 = `My name is : ${first} ${second}.I have ${(friends.length * 500)} tk`;

console.log(oldHeader2);
console.log(new1);
console.log(new2);
console.log(new3);
console.log(fullNew);
console.log(fullNew1);
console.log(fullNew2);