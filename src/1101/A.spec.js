const { getMinNumber } = require('./A');

describe('1101A. Minimum Integer', () => {
  it.each`
    n    | l    | r     | d    | result
    ${1} | ${2} | ${4}  | ${2} | ${6}
    ${2} | ${5} | ${10} | ${4} | ${4}
    ${3} | ${3} | ${10} | ${1} | ${1}
    ${4} | ${1} | ${2}  | ${3} | ${3}
    ${5} | ${4} | ${6}  | ${5} | ${10}
  `('Base test: $n', ({ l, r, d, result }) => {
    expect(getMinNumber(l, r, d)).toBe(result);
  });
});
