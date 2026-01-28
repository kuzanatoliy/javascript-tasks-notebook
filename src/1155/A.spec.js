const { isItPossibleToTransform } = require('./A');

describe('1155A. Reverse a Substring', () => {
  it.each`
    n    | str          | result
    ${1} | ${'abacaba'} | ${['YES', [2, 3]]}
    ${2} | ${'aabcfg'}  | ${['NO']}
  `('Base test: $n', ({ str, result }) => {
    expect(isItPossibleToTransform(str)).toStrictEqual(result);
  });
});
