const { getCountOfNodes } = require('./C');

describe('431C. k-Tree', () => {
  it.each`
    n    | n    | k    | d    | result
    ${1} | ${3} | ${3} | ${2} | ${3}
    ${2} | ${3} | ${3} | ${3} | ${1}
    ${3} | ${4} | ${3} | ${2} | ${6}
    ${4} | ${4} | ${5} | ${2} | ${7}
  `('Base test: $n', ({ n, k, d, result }) => {
    expect(getCountOfNodes(n, k, d)).toBe(result);
  });
});
