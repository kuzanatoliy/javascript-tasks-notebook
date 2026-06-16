/* eslint-disable sort-keys */
const DAYS = [
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
  'sunday',
];
const MAP = {
  monday: [0, 2, 3],
  tuesday: [1, 3, 4],
  wednesday: [2, 4, 5],
  thursday: [3, 5, 6],
  friday: [4, 6, 0],
  saturday: [5, 0, 1],
  sunday: [6, 1, 2],
};

module.exports = {
  isItPossible: (day1, day2) =>
    day2 === DAYS[MAP[day1][0]] ||
    day2 === DAYS[MAP[day1][1]] ||
    day2 === DAYS[MAP[day1][2]]
      ? 'YES'
      : 'NO',
};
