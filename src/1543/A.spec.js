const { getTransformProps } = require('./A');

describe('1543A. Exciting Bets', () => {
  it.each`
    n    | a    | b    | result
    ${1} | ${8} | ${5} | ${[3, 1]}
    ${2} | ${1} | ${2} | ${[1, 0]}
    ${3} | ${4} | ${4} | ${[0, 0]}
    ${4} | ${3} | ${9} | ${[6, 3]}
  `('Base test: $n', ({ a, b, result }) => {
    expect(getTransformProps(a, b)).toStrictEqual(result);
  });
});
