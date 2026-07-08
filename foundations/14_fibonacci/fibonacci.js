const fibonacci = function (index) {
  let indNum = Number(index);
  if (indNum < 0) {
    return "OOPS";
  } else if (indNum === 0) {
    return 0;
  } else {
    let secuence = [1, 1];
    for (i = 2; i < indNum; i++) {
      let next = secuence[i - 1] + secuence[i - 2];
      secuence.push(next);
    }
    return secuence[indNum - 1];
  }
};

// Do not edit below this line
module.exports = fibonacci;
