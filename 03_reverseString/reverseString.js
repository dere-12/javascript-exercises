const reverseString = function (texts) {
  const textsArray = texts.split(" ");
  let textReversed = "";
  let result = [];

  for (const text of textsArray) {
    for (let i = 1; i <= text.length; i++) {
      textReversed += text.at(-i);
    }
    result.unshift(textReversed);
    textReversed = "";
  }

  return result.join(" ");
};

// Do not edit below this line
module.exports = reverseString;
