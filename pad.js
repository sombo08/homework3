function pad(str, char, count, isStart) {
    if (isStart) {
        return char.repeat(Math.max(0, count - str.length)) + str;
    } else {
        return str + char.repeat(Math.max(0, count - str.length));
    }
}

console.log(pad('sombo', '+', 12, true));
console.log(pad('sombo', '#', 8, false));
console.log(pad('sombo', '*', 5, true));