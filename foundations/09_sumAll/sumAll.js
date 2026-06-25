const sumAll = function (num1, num2) {
  let sum = 0;
  let error = "ERROR";
  if (num1 < 0 || num2 < 0) {
    return error;
  } else if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
    return error;
  } else if (num1 < num2) {
    for (let i = num1; i <= num2; i++) {
      sum += Number([i]);
    }
  } else if (num2 < num1) {
    for (let i = num2; i <= num1; i++) {
      sum += Number([i]);
    }
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
