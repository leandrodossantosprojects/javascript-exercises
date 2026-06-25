const convertToCelsius = function (temp) {
  let formula = Math.round(((temp - 32) / 1.8) * 10) / 10;
  return formula;
};

const convertToFahrenheit = function (temp) {
  let formula = Math.round(temp * 18) / 10 + 32;
  return formula;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
