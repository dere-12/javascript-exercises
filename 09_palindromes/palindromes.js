const palindromes = function (str) {
  let strLower = str.toLowerCase();
  if (strLower.endsWith(".") || strLower.endsWith("!")) {
    strLower = strLower.slice(0, strLower.length - 1);
  }
  const strArray = strLower.split(" ");
  let strPalindromes = [];
  for (let i = 0; i < strArray.length; i++) {
    if (!strArray[i].endsWith(",")) {
      strPalindromes.push(strArray[i]);
    } else {
      strArray[i] = strArray[i].slice(0, strArray[i].length - 1);
      strPalindromes.push(strArray[i]);
    }
  }
  const strPalindromesJoined = strPalindromes.join("");

  const strPalindromesReversed = strPalindromesJoined
    .split("")
    .reverse()
    .join("");

  if (strPalindromesJoined === strPalindromesReversed) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
