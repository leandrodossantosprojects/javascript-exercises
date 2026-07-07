const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce((total, number) => total + number, 0);
};

const multiply = function (arr) {
  return arr.reduce((result, number) => (result *= number), 1);
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (n) {
  result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
