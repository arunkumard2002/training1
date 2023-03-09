let mystring = 'Example of string';
console.log(mystring);
mystring.charAt(12);
// output is 't';

mystring.charCodeAt(0);
// output is 69;
/**
 * hexademical number is like
 * it will starts from 0 - f
 * 0-9 and a -f
 */
let otherstring = 'join string'
let joinedstring = mystring.concat(...otherstring);
console.log(joinedstring);

console.log(mystring.includes('Example'));

console.log(mystring.length);

console.log(mystring.indexOf('mple'));

console.log(mystring.endsWith('g', mystring.length));

console.log(mystring.lastIndexOf('g', mystring.length));

let str = '    xyx    '; 
console.log(str);
str.trim().toUpperCase();

