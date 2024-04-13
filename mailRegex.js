var arr = [
    {
        userName: "Test",
        lastName: "Test",
        email: "test.test@gmail.com"
    },
    {
        userName: "Dmitro",
        lastName: "Porohov",
        email: "dmitro.porohov@yahoo.com"
    },
    {
        userName: "Andrii",
        lastName: "",
        email: "andrii@mail.ru" // Нам такі не підходять
    },
];

const emailRegex = /^[a-zA-Z0-9._+-]+@[gmail|yahoo]+\.[com]+$/;

const trustedEmails = arr.filter(item => emailRegex.test(item.email));

console.log(trustedEmails);