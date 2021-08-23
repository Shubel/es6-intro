function fullName (first, last = 'Islam') {
    const name = first + " " + last;
    return name;
}
const student = fullName('Aminul');
console.log(student);