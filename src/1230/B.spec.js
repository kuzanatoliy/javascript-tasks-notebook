const { transformNumber } = require('./B');

describe('1230B. Ania and Minimizing', () => {
  it.each`
    n    | k    | snum            | result
    ${1} | ${3} | ${'51528'}      | ${'10028'}
    ${2} | ${2} | ${'102'}        | ${'100'}
    ${3} | ${1} | ${'1'}          | ${'0'}
    ${4} | ${9} | ${'6605076924'} | ${'1000000000'}
  `('Base test: $n', ({ k, snum, result }) => {
    expect(transformNumber(k, snum)).toBe(result);
  });
});
