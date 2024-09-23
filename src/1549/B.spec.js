const { getCountOfSteps } = require('./B');

describe('1549A. Gregor and Cryptography', () => {
  it.each`
    n    | l1         | l2         | result
    ${1} | ${'000'}   | ${'111'}   | ${3}
    ${1} | ${'1111'}  | ${'1111'}  | ${4}
    ${1} | ${'010'}   | ${'010'}   | ${0}
    ${1} | ${'11001'} | ${'00000'} | ${0}
    ${1} | ${'111'}   | ${'010'}   | ${1}
  `('Base test: $n', ({ l1, l2, result }) => {
    expect(getCountOfSteps(l1, l2)).toStrictEqual(result);
  });
});
