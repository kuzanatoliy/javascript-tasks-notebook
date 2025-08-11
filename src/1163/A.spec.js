const { getCountOfGroups } = require('./A');

describe('1163A. Eating Soup', () => {
  it.each`
    n    | num  | k    | result
    ${1} | ${7} | ${4} | ${3}
    ${2} | ${6} | ${2} | ${2}
    ${3} | ${3} | ${0} | ${1}
    ${4} | ${2} | ${2} | ${0}
  `('Base test: $n', ({ num, k, result }) => {
    expect(getCountOfGroups(num, k)).toBe(result);
  });
});
