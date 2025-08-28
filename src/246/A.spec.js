const { getConterExample } = require('./A');

describe('246A. Buggy Sorting', () => {
  it.each`
    n    | num  | result
    ${1} | ${1} | ${[-1]}
    ${2} | ${2} | ${[-1]}
    ${3} | ${3} | ${[3, 2, 1]}
  `('Base test: $n', ({ num, result }) => {
    expect(getConterExample(num)).toStrictEqual(result);
  });
});
