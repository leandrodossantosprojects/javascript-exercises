const palindromes = function (str) {
  let strClean = str.toLowerCase().replaceAll(/[^a-zA-Z0-9]/g, "");
  let reverseStr = strClean.split("").reverse().join("");
  return strClean === reverseStr ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
