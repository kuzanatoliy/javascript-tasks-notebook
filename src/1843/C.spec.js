const { binaryTreeSum } = require('./C');

describe('1843C. Apple Tree', () => {
  it.each`
    node                  | result
    ${3n}                 | ${4n}
    ${10n}                | ${18n}
    ${37n}                | ${71n}
    ${1n}                 | ${1n}
    ${10000000000000000n} | ${19999999999999980n}
    ${15n}                | ${26n}
  `('input $node output $result', ({ node, result }) => {
    expect(binaryTreeSum(node)).toBe(result);
  });
});
