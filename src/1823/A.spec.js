const { isArrayExist } = require('./A');

describe('1823A. A-characteristic', () => {
  it.each`
    n    | num  | k    | result
    ${1} | ${2} | ${0} | ${['YES', [1, -1]]}
    ${2} | ${2} | ${1} | ${['YES', [-1, -1]]}
    ${3} | ${3} | ${1} | ${['YES', [1, -1, -1]]}
    ${4} | ${3} | ${2} | ${['NO']}
    ${5} | ${3} | ${3} | ${['YES', [-1, -1, -1]]}
    ${6} | ${5} | ${4} | ${['YES', [1, 1, -1, -1, -1]]}
    ${7} | ${5} | ${5} | ${['NO']}
  `('Base test: $n', ({ num, k, result }) => {
    expect(isArrayExist(num, k)).toStrictEqual(result);
  });
});
