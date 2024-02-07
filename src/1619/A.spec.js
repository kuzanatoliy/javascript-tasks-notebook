const { isSquareString } = require('./A');

describe('1619A. Square String?', () => {
  it.each`
    n     | number       | result
    ${1}  | ${'a'}       | ${'NO'}
    ${2}  | ${'aa'}      | ${'YES'}
    ${3}  | ${'aaa'}     | ${'NO'}
    ${4}  | ${'aaaa'}    | ${'YES'}
    ${5}  | ${'abab'}    | ${'YES'}
    ${6}  | ${'abcabc'}  | ${'YES'}
    ${7}  | ${'abacaba'} | ${'NO'}
    ${8}  | ${'xxyy'}    | ${'NO'}
    ${9}  | ${'xyyx'}    | ${'NO'}
    ${10} | ${'xyxy'}    | ${'YES'}
  `('Base test: $n', ({ number, result }) => {
    expect(isSquareString(number)).toBe(result);
  });
});
