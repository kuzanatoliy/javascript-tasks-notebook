module.exports = {
  isItPossibleToOpenEachDoor: (key, doors) => {
    for (let j = 0; j < doors.length - 1; j++) {
      if (doors[key - 1] === 0) {
        return 'NO';
      }
      key = doors[key - 1];
    }
    return 'YES';
  },
};
