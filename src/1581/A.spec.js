const { getCountOfPermutations } = require('./A');

describe('1581A. CQXYM Count Permutations', () => {
  it.each`
    n    | num      | result
    ${1} | ${1}     | ${1}
    ${2} | ${2}     | ${12}
    ${3} | ${9}     | ${830455698}
    ${4} | ${91234} | ${890287984}
  `('Base test: $n', ({ num, result }) => {
    expect(getCountOfPermutations(num)).toBe(result);
  });
});
