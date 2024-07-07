const { getPrefixLength } = require('./B');

describe('1714B. Remove Prefix', () => {
  it.each`
    n    | array                    | result
    ${1} | ${[3, 1, 4, 3]}          | ${1}
    ${2} | ${[1, 1, 1, 1, 1]}       | ${4}
    ${3} | ${[1]}                   | ${0}
    ${4} | ${[6, 5, 4, 3, 2, 1]}    | ${0}
    ${5} | ${[1, 2, 1, 7, 1, 2, 1]} | ${5}
  `('Base test: $n', ({ array, result }) => {
    expect(getPrefixLength(array)).toBe(result);
  });
});
