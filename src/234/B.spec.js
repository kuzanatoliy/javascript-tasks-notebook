const { getScheduleAndPower } = require('./B');

describe('234B. Reading', () => {
  it.each`
    n    | k    | arr                          | result
    ${1} | ${3} | ${[20, 10, 30, 40, 10]}      | ${[20, [1, 3, 4]]}
    ${2} | ${5} | ${[90, 20, 35, 40, 60, 100]} | ${[35, [1, 3, 4, 5, 6]]}
  `('Base test: $n', ({ k, arr, result }) => {
    expect(getScheduleAndPower(k, arr)).toStrictEqual(result);
  });
});
