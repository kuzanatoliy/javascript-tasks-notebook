const { isItPossibleToTransform } = require('./B');

describe('2225B. Alternating String', () => {
  it.each`
    n     | str           | result
    ${1}  | ${'abbaba'}   | ${'YES'}
    ${2}  | ${'aaaaa'}    | ${'NO'}
    ${3}  | ${'bababba'}  | ${'YES'}
    ${4}  | ${'ab'}       | ${'YES'}
    ${5}  | ${'abbaabba'} | ${'NO'}
    ${6}  | ${'bbb'}      | ${'YES'}
    ${7}  | ${'ababa'}    | ${'YES'}
    ${8}  | ${'aabb'}     | ${'YES'}
    ${9}  | ${'bb'}       | ${'YES'}
    ${10} | ${'babb'}     | ${'YES'}
  `('Base test: $n', ({ str, result }) => {
    expect(isItPossibleToTransform(str)).toBe(result);
  });
});
