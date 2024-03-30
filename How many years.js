let userInput = prompt('Введіть число:', '');

if (!isNaN(userInput) && userInput >= 0) {
    let lastDigit = userInput % 10;
    let word;
    if (lastDigit === 1) {
        word = 'рік';
    } else if (lastDigit >= 2 && lastDigit <= 4) {
        word = 'роки';
    } else {
        word = 'років';
    }
    console.log('Вам:', userInput + ' ' + word);
} else {
    console.log("Будь ласка, введіть невід'ємне число.");
}