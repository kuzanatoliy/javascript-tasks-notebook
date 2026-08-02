const {
  getDaysBeforeWarrmenrDay,
} = require('./get-days-counts-before-warrmer-day');

describe('getDaysBeforeWarrmenrDay', () => {
  it.each`
    n    | arr                             | result
    ${1} | ${[17, 16, 19, 15, 13, 18, 20]} | ${[2, 1, 4, 2, 1, 1, 0]}
  `('Base test: $n', ({ arr, result }) => {
    expect(getDaysBeforeWarrmenrDay(arr)).toStrictEqual(result);
  });
});
