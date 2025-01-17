const { getPair } = require('./A');

describe('1096A. Find Divisible', () => {
  it.each`
    n    | l    | r     | result
    ${1} | ${1} | ${10} | ${[1, 2]}
    ${2} | ${3} | ${14} | ${[3, 6]}
    ${3} | ${1} | ${10} | ${[1, 2]}
  `('Base test: $n', ({ l, r, result }) => {
    expect(getPair(l, r)).toStrictEqual(result);
  });
});
