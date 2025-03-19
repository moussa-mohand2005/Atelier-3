let numbers = [1, 7, 10, 9, 8, 2];
let result = numbers.filter(num => num % 2 === 0).sort((a, b) => a - b);
console.log(result);
