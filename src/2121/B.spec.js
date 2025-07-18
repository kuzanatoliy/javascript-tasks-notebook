const { isItPosibleToConstructString } = require('./B');

describe('2121B. Above the Clouds', () => {
  it.each`
    n     | str         | result
    ${1}  | ${'aaa'}    | ${'YES'}
    ${2}  | ${'aba'}    | ${'NO'}
    ${3}  | ${'aab'}    | ${'YES'}
    ${4}  | ${'abca'}   | ${'NO'}
    ${5}  | ${'abba'}   | ${'YES'}
    ${6}  | ${'aabb'}   | ${'YES'}
    ${7}  | ${'abaca'}  | ${'YES'}
    ${8}  | ${'abcda'}  | ${'NO'}
    ${9}  | ${'abcba'}  | ${'YES'}
    ${10} | ${'abcbbf'} | ${'YES'}
    ${11} | ${'abcdaa'} | ${'YES'}
    ${12} | ${'abb'}    | ${'YES'}
  `('Base test: $n', ({ str, result }) => {
    expect(isItPosibleToConstructString(str)).toBe(result);
  });
});
