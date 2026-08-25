const { getMinorReduction } = require('./D');

describe('2008C. Longest Good Array', () => {
  it.each`
    n    | per                   | map         | result
    ${1} | ${[1]}                | ${'0'}      | ${[1]}
    ${2} | ${[1, 2, 4, 5, 3]}    | ${'10101'}  | ${[0, 1, 1, 1, 1]}
    ${3} | ${[5, 4, 1, 3, 2]}    | ${'10011'}  | ${[2, 2, 2, 2, 2]}
    ${4} | ${[3, 5, 6, 1, 2, 4]} | ${'010000'} | ${[4, 1, 4, 4, 1, 4]}
    ${5} | ${[1, 2, 3, 4, 5, 6]} | ${'100110'} | ${[0, 1, 1, 0, 0, 1]}
  `('Base test: $n', ({ per, map, result }) => {
    expect(getMinorReduction(per, map)).toStrictEqual(result);
  });
});
