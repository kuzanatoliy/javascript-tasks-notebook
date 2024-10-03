const { getConfigurations } = require('./A');

describe('378A. Playing with Dice', () => {
  it.each`
    n    | a    | b    | result
    ${1} | ${2} | ${5} | ${[3, 0, 3]}
    ${2} | ${2} | ${4} | ${[2, 1, 3]}
  `('Base test: $n', ({ a, b, result }) => {
    expect(getConfigurations(a, b)).toStrictEqual(result);
  });
});
