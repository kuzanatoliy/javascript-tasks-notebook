const { buildSchedule } = require('./A');

describe('491A. Up the hill', () => {
  it.each`
    n    | a    | b    | result
    ${1} | ${0} | ${1} | ${[2, 1]}
    ${2} | ${2} | ${1} | ${[1, 2, 4, 3]}
  `('Base test: $n', ({ a, b, result }) => {
    expect(buildSchedule(a, b)).toStrictEqual(result);
  });
});
