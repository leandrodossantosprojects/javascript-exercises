const findTheOldest = function (arr) {
  const age = function (birth, death) {
    if (!death) {
      death = new Date().getFullYear();
    }
    return death - birth;
  };

  let result = arr.reduce((oldest, person) => {
    const oldestAge = age(oldest.yearOfBirth, oldest.yearOfDeath);
    const currentAge = age(person.yearOfBirth, person.yearOfDeath);
    return oldestAge < currentAge ? person : oldest;
  });
  return result;
};

// Do not edit below this line
module.exports = findTheOldest;
