let unit = 'км';
let value = 2;

function convertUnit(unit, value) {
    let result;

    switch (unit) {
        case 'км':
            result = value * 1000 + ' м';
            break;
        case 'год':
            result = value * 60 + ' хв';
            break;
        case 'кг':
            result = value * 1000 + ' г';
            break;
        default:
            result = 'Невідома одиниця виміру';
    }
    return result;
}

console.log(value + ' ' + unit + ' це ' + convertUnit(unit, value));