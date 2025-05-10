const people = [
  {
    name: "Carly",
    yearOfBirth: 1018,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];

const findTheOldest = function (people) {
  const sorted = people.sort((a, b) => {
    if (a.yearOfDeath - a.yearOfBirth > b.yearOfDeath - b.yearOfBirth) {
      return 1;
    } else {
      return -1;
    }
  });

  return sorted.pop();
};

console.log(findTheOldest(people));

// To be Continued.

// Do not edit below this line
module.exports = findTheOldest;
