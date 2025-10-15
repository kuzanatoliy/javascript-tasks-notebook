const { getCounts } = require('./A');

describe('1373A. Donut Shops', () => {
  it.each`
    n    | a              | b              | c              | result
    ${1} | ${5}           | ${10}          | ${4}           | ${[-1, 10]}
    ${2} | ${4}           | ${5}           | ${20}          | ${[1, -1]}
    ${3} | ${2}           | ${2}           | ${3}           | ${[1, 2]}
    ${4} | ${1000000000n} | ${1000000000n} | ${1000000000n} | ${[-1, 1000000000n]}
  `('Base test: $n', ({ a, b, c, result }) => {
    expect(getCounts(a, b, c)).toStrictEqual(result);
  });
});
