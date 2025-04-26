const repeatString = function (text, num) {
  let result = "";

  if (num < 0) {
    return (result = "ERROR");
  }
  for (let i = 0; i < num; i++) {
    result += text;
  }
  return result;
};

// Do not edit below this line
module.exports = repeatString;
