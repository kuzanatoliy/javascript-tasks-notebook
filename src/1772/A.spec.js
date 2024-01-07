const { getResultOfExpression } = require('./A');

describe('1772A. A+B?', () => {
  it.each`
    n    | expression | result
    ${1} | ${'4+2'}   | ${6}
    ${2} | ${'0+0'}   | ${0}
    ${3} | ${'3+7'}   | ${10}
    ${4} | ${'8+9'}   | ${17}
  `('Base test: $n', ({ expression, result }) => {
    expect(getResultOfExpression(expression)).toBe(result);
  });
});
