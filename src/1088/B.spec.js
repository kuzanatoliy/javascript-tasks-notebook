const { getMinValues } = require('./B');

describe('1088B. Ehab and subtraction', () => {
  it.each`
    n    | k    | arr              | result
    ${1} | ${5} | ${[1, 2, 3]}     | ${[1, 1, 1, 0, 0]}
    ${2} | ${2} | ${[10, 3, 5, 3]} | ${[3, 2]}
  `('Base test: $n', ({ k, arr, result }) => {
    expect(getMinValues(k, arr)).toStrictEqual(result);
  });
});
