var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн"
};

services['Розбити скло'] = "200 грн";

services.price = function () {
    var totalPrice = 0;
    for (var service in this) {
        if (typeof this[service] === 'string') {
            var price = parseInt(this[service]);
            totalPrice += price;
        }
    }
    return totalPrice + ' грн';
};

services.minPrice = function () {
    var minPrice = Infinity;
    for (var service in this) {
        if (typeof this[service] === 'string') {
            var price = parseInt(this[service]);
            if (price < minPrice) {
                minPrice = price;
            }
        }
    }
    return minPrice + ' грн';
};

services.maxPrice = function () {
    var maxPrice = -Infinity;
    for (var service in this) {
        if (typeof this[service] === 'string') {
            var price = parseInt(this[service]);
            if (price > maxPrice) {
                maxPrice = price;
            }
        }
    }
    return maxPrice + ' грн';
};

console.log("Загальна ціна:", services.price());
console.log("Мінімальна ціна:", services.minPrice()); 
console.log("Максимальна ціна:", services.maxPrice()); 