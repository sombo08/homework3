let obj = {
  name: 'Sombo',
  age: 22,
  city: 'Chernihiv',
  
  getInfo() {
    for (let key in this) {
      if (this.hasOwnProperty(key)) {
        console.log(`${key}: ${this[key]}`);
      }
    }
  }
};

obj.getInfo();
obj.newProperty = 'Оновлення!';
obj.getInfo();