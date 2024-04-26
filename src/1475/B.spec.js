const { isItRepresentableAsTheSumOf2020 } = require('./B');

describe('1475A. Odd Divisor', () => {
  it.each`
    n    | number  | result
    ${1} | ${1}    | ${'NO'}
    ${2} | ${4041} | ${'YES'}
    ${3} | ${4042} | ${'YES'}
    ${4} | ${8081} | ${'YES'}
    ${5} | ${8079} | ${'NO'}
  `('Base test: $n', ({ number, result }) => {
    expect(isItRepresentableAsTheSumOf2020(number)).toBe(result);
  });
});
