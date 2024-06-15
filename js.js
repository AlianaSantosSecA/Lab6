
const myNumber = 10;
const myString = "Hello JavaScript";

console.log(`${myString} and my number is ${myNumber}`);

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

for (let i = 1; i <= 5; i++) {
  let multiple = 3 * i;
  console.log(`Multiples of 3 are : ${multiple}`);
}

function addNumbers(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

let result = addNumbers(22, 24);
console.log(result);

function multiplyNumbers(n1, n2) {
  let product = n1 * n2;
  return product;
}

let outcome = multiplyNumbers(22, 24);
console.log(outcome);
