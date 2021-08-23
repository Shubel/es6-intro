const add4 = (num1, num2) => num1 + num2;
const sum4 = add4(15, 17);
console.log(sum4);

// single parameter
const tenTimes = (number) => number * 10;
const result = tenTimes(15);
console.log(result);

// single parameter
const fiveTimes = number => number * 5;
const output = fiveTimes(15);
console.log(output);

// no parameter
const getName = () => 'Shakib Khan';
const name = getName();
console.log(name);

// multiple parameter with arrow function
const doMath = (x, y) => {
    const add = x + y;
    const diff = x - y;
    const difference  = add + diff;
    return difference;
}
const total = doMath(15, 7);
console.log(total);