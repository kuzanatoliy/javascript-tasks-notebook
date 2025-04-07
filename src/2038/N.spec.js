const { transformExpression } = require('./N');

describe('2038N. Fixing the Expression', () => {
  it.each`
    n    | expression | result
    ${1} | ${'3<7'}   | ${'3<7'}
    ${2} | ${'3>7'}   | ${'3<7'}
    ${3} | ${'8>9'}   | ${'8<9'}
    ${4} | ${'0=0'}   | ${'0=0'}
    ${5} | ${'5<3'}   | ${'5>3'}
  `('Base test: $n', ({ expression, result }) => {
    expect(transformExpression(expression)).toStrictEqual(result);
  });
});
