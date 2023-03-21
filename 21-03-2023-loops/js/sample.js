/**
 * we have discussed on for, while, do-while, switch
 * today we are going to discuss on for-of, for-in, forEach, each
 */
// let value = 0;
// while (value < 10) {
//     console.log(value);
//     value++;
// }
let tempObject = {
    name: 'arun',
    stays: 'hyd',
    topic: 'js'
}

for (let index = 0; index < Object.keys(tempObject).length; index++) {
    let keys = Object.keys(tempObject);
    console.log(tempObject[keys[index]]);
}


for (const iterator in tempObject) {
    console.log(iterator);
    console.log(`${iterator}: ${tempObject[iterator]}`);
}

Object.keys(tempObject).forEach((obj) => {
    console.log(`There are ${tempObject[obj]} ${obj}`);
})

// it will get all the keys of the object
console.log(Object.keys(tempObject));

// it will get all the values of the object
console.log(Object.values(tempObject));

let tempArr = Object.entries(tempObject);
for (const iterator of tempArr) {
    console.log(iterator);
}


const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
const source1 = { b: 10, d: 5 };

const returnedTarget = Object.assign(target, source, source1);



