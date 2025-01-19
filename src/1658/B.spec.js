const { getCounts } = require('./B');

describe('1658B. Marin and Anti-coprime Permutation', () => {
  it.each`
    n    | num     | result
    ${1} | ${1}    | ${0}
    ${2} | ${2}    | ${1}
    ${3} | ${3}    | ${0}
    ${4} | ${4}    | ${4}
    ${5} | ${5}    | ${0}
    ${6} | ${6}    | ${36}
    ${7} | ${1000} | ${665702330}
  `('Base test: $n', ({ num, result }) => {
    expect(getCounts(num)).toBe(result);
  });
});
