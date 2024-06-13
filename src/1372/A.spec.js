const { getArray } = require('./A');

describe('1372A. Omkar and Completion', () => {
  it.each`
    n    | number | result
    ${1} | ${5}   | ${[1, 1, 1, 1, 1]}
    ${2} | ${4}   | ${[1, 1, 1, 1]}
  `('Base test: $n', ({ number, result }) => {
    expect(getArray(number)).toStrictEqual(result);
  });
});
