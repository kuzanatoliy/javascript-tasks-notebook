const { getAmountOfBerries } = require('./A');

describe('2086A. Cloudberry Jam', () => {
  it.each`
    n    | num  | result
    ${1} | ${1} | ${2}
    ${2} | ${3} | ${6}
  `('Base test: $n', ({ num, result }) => {
    expect(getAmountOfBerries(num)).toBe(result);
  });
});
