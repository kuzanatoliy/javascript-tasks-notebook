const { isItPossibleToTransform } = require('./A');

describe('1397A. Juggling Letters', () => {
  it.each`
    n    | strings                             | result
    ${1} | ${['caa', 'cbb']}                   | ${'YES'}
    ${2} | ${['cba', 'cba', 'cbb']}            | ${'NO'}
    ${3} | ${['ccab', 'cbac', 'bca', 'acbcc']} | ${'YES'}
    ${4} | ${['acb', 'caf', 'c', 'cbafc']}     | ${'NO'}
  `('Base test: $n', ({ strings, result }) => {
    expect(isItPossibleToTransform(strings)).toStrictEqual(result);
  });
});
