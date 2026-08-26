const { getMaxSum } = require('./C');

describe('2137C. Maximum Even Sum', () => {
  it.each`
    n    | a     | b      | result
    ${1} | ${8n} | ${1n}  | ${-1n}
    ${2} | ${1n} | ${8n}  | ${6n}
    ${3} | ${7n} | ${7n}  | ${50n}
    ${4} | ${2n} | ${6n}  | ${8n}
    ${5} | ${9n} | ${16n} | ${74n}
    ${6} | ${1n} | ${6n}  | ${-1n}
    ${7} | ${4n} | ${6n}  | ${14n}
  `('Base test: $n', ({ a, b, result }) => {
    expect(getMaxSum(a, b)).toBe(result);
  });
});
