const { getCountOfOperations } = require('./A');

describe('2075A. To Zero', () => {
  it.each`
    n    | num           | k    | result
    ${1} | ${39}         | ${7} | ${7}
    ${2} | ${9}          | ${3} | ${4}
    ${3} | ${6}          | ${3} | ${3}
    ${4} | ${999967802}  | ${3} | ${499983901}
    ${5} | ${5}          | ${5} | ${1}
    ${6} | ${6}          | ${5} | ${2}
    ${7} | ${999999999}  | ${3} | ${499999999}
    ${8} | ${1000000000} | ${3} | ${500000000}
  `('Base test: $n', ({ num, k, result }) => {
    expect(getCountOfOperations(num, k)).toBe(result);
  });
});
