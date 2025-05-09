const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce((total, item) => total + item, 0);
};

const multiply = function (arr) {
  return arr.reduce((total, item) => total * item, 1);
};

const power = function (a, b) {
  let result = 1;
  for (let i = 1; i <= b; i++) {
    result *= a;
  }
  return result;
};

const factorial = function (n) {
  let result = 1;
  if (n === 0) {
    return result;
  } else {
    for (let i = n; i >= 1; i--) {
      result *= n;
      n--;
    }
    return result;
  }
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
