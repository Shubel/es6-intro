// array length, push, pop
const array =[2, 4, 6, 8, 10 , 12];
const arrayLength = array.length;
console.log(arrayLength);

array.push(84, 89);
console.log(array);

array.pop();
console.log(array);

array[2] = 456;
console.log(array);

// includes()
const array = [1,2,3,4,5,6];
if(array.includes(4)) {
    console.log("true 4 was found in the array") // true 4 was found in the array
    };

// indexOf()
const array = [1,2,3,4,5,6];
if(array.indexOf(4) > -1 ) {
    console.log("true 4 was found in the array") // true 4 was found in the array
    };


// indexOf() vs includes()
const array =[10, 20, 30, 40, 50, 60];
const arrayIndexOf = array.indexOf(50);
console.log(arrayIndexOf);

const arrayIncludes1 = array.includes(40);
console.log(arrayIncludes1);
const arrayIncludes2 = array.includes(45);
console.log(arrayIncludes2);