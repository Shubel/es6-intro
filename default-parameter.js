function fullName (first, last = 'Islam') {
    const name = first + " " + last;
    return name;
}
const student = fullName('Aminul');
console.log(student);

// add number
function add (num1, num2 = 10) {
    return num1 + num2;
}
console.log(add(15));