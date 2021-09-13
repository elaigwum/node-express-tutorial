// const os = require('os')

// console.log(os.userInfo())
// console.log(os.uptime())
const readfile = require('fs');

const first = readfile.readFileSync('./content/first.txt', 'utf-8');

console.log(first);

const second = readfile.writeFileSync('./content/second.txt', 'This is the second content of my file');

console.log(second)