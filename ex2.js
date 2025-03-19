let numbers = [1, 3, 4];
let result = numbers.map(num => num === 1 ? num : num * result[numbers.indexOf(num) - 1]);
console.log(result);
