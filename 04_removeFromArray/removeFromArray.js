const removeFromArray = function (array, ...otherPara) {
  const filtered = array.filter((item) => {
    for (let i = 0; i < otherPara.length; i++) {
      if (item === otherPara[i]) {
        return false;
      }
    }
    return item;
  });

  return filtered;
};

// Do not edit below this line
module.exports = removeFromArray;
