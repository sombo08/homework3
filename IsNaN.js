function myIsNaN(value) {
    return typeof value !== 'number' || value !== value;
}

console.log(myIsNaN(123));
console.log(myIsNaN('abc'));