let unit = 'км';
let value = 23;

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

console.log(value + ' ' + unit + ' це ' + result);
