function checkProbabilityTheory(count) {
    let evenCount = 0;
    let oddCount = 0;

    for (let i = 0; i < count; i++) {
        let randomNumber = Math.floor(Math.random() * (1000 - 100 + 1)) + 100; // Генеруємо число від 100 до 1000
        if (randomNumber % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }

    let percentageEven = (evenCount / count) * 100;
    let percentageOdd = (oddCount / count) * 100;

    console.log('Кількість згенерованих чисел:', count);
    console.log('Парних чисел:', evenCount);
    console.log('Непарних чисел:', oddCount);
    console.log('Відсоток парних до непарних:', percentageEven.toFixed(2) + '%:' + percentageOdd.toFixed(2) + '%');
}

checkProbabilityTheory(654);