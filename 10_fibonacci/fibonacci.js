const fibonacci = function (n) {
  n = parseInt(n);
  let fibonacci = [1];
  for (let i = 1; i <= n; i++) {
    let lastElement = fibonacci[fibonacci.length - 1];
    let beforeLastElement = fibonacci[fibonacci.length - 2];
    if (beforeLastElement === undefined) {
      fibonacci.push(1);
    } else {
      fibonacci.push(lastElement + beforeLastElement);
    }
  }

  if (n === 0) {
    return 0;
  } else if (n < 0) {
    return "OOPS";
  } else {
    return fibonacci[n - 1];
  }
};

// Do not edit below this line
module.exports = fibonacci;
