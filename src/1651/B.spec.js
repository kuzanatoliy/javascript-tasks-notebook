const { itIsPossibleToProve } = require('./B');

describe('1651B. Prove Him Wrong', () => {
  it.each`
    n    | num    | result
    ${1} | ${2}   | ${['YES', [1, 3]]}
    ${2} | ${512} | ${['NO']}
    ${3} | ${3}   | ${['YES', [1, 3, 9]]}
  `('Base test: $n', ({ num, result }) => {
    expect(itIsPossibleToProve(num)).toStrictEqual(result);
  });
});
