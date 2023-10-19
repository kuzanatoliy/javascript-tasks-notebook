const { binaryTreeSum } = require('./C');

describe('1843C. Apple Tree', () => {
  it.each`
    n    | node                  | result
    ${1} | ${3n}                 | ${4n}
    ${2} | ${10n}                | ${18n}
    ${3} | ${37n}                | ${71n}
    ${4} | ${1n}                 | ${1n}
    ${5} | ${10000000000000000n} | ${19999999999999980n}
    ${6} | ${15n}                | ${26n}
  `('Base test: $n', ({ node, result }) => {
    expect(binaryTreeSum(node)).toBe(result);
  });
});
