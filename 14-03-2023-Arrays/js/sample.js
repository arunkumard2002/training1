/**
 * Primitive Datatypes 
 * we have discussed on 
 * Strings
 * Number
 * Undefined
 * null
 * Boolean = true or false flag
 * */

/**
 * Non Primitive DataType
 * 1. Arrays
 * 2. Objects
 * 3. Functions
 */
/**
 * javascript reserved keywords
 * https://www.w3schools.com/js/js_reserved.asp
 */

// today we will discuss on Arrays


let arr = ['arun', 'kishore', 'jayanth', 'priyanka', 'karthik', 'sujana', 'raajev', 'srinivas'];
let arr2 = ['xyx'];
// let concatArray = arr.concat(secondarr);
// console.log(concatArray);

let copywith = arr.copyWithin(0,2,5);
// debugger;
[0,1,2]
[2,3,4]

let a = {
    name: 'arun'
}
let b = a;
console.log(a = b);
console.log(a);
console.log(b);

b.name = 'kumar';
console.log(a);

let arEntires = arr.entries();

const cars = ["Saab", "Volvo", "BMW","Saab", "Volvo", "KIA"];
cars.push('Jeep');
cars.push('Jeep');
cars.push('Jeep');
cars.forEach((car, index) => {
	let pTag = document.createElement('p');
    pTag.textContent = car;
 let demoId = document.getElementById('demo');
 demoId.appendChild(pTag);
});
cars.push('Jeep');
