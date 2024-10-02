const { isEvenCount } = require('./B');

describe('2014B. Robin Hood and the Major Oak', () => {
  it.each`
    n    | num          | k           | result
    ${1} | ${1}         | ${1}        | ${'NO'}
    ${2} | ${2}         | ${1}        | ${'YES'}
    ${3} | ${2}         | ${2}        | ${'NO'}
    ${4} | ${3}         | ${2}        | ${'NO'}
    ${5} | ${4}         | ${4}        | ${'YES'}
    ${6} | ${641009859} | ${36364670} | ${'NO'}
  `('Base test: $n', ({ num, k, result }) => {
    expect(isEvenCount(num, k)).toBe(result);
  });
});
