const { getMinTiredness } = require('./A');

describe('934A. Friends Meeting', () => {
  it.each`
    n    | x1     | x2    | result
    ${1} | ${3}   | ${4}  | ${1}
    ${2} | ${101} | ${99} | ${2}
    ${3} | ${5}   | ${10} | ${9}
  `('Base test: $n', ({ x1, x2, result }) => {
    expect(getMinTiredness(x1, x2)).toBe(result);
  });
});
