const regex = /^(?!.*[Aa]).{6,}$/;
const testStrings = [
  "abcdef",
  "helloworld"
];

for (let str of testStrings) {
  const isValid = regex.test(str);
  console.log(`Рядок "${str}": ${isValid ? 'валідний' : 'не валідний'}`);
}