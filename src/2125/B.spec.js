const { getMinCost } = require('./B');

describe('2125B. Left and Down', () => {
  it.each`
    n    | a     | b     | k     | result
    ${1} | ${3}  | ${5}  | ${15} | ${1}
    ${2} | ${2}  | ${3}  | ${1}  | ${2}
    ${3} | ${12} | ${18} | ${8}  | ${1}
    ${4} | ${9}  | ${7}  | ${5}  | ${2}
    ${5} | ${1}  | ${1}  | ${1}  | ${1}
  `('Base test: $n', ({ a, b, k, result }) => {
    expect(getMinCost(a, b, k)).toBe(result);
  });
});
