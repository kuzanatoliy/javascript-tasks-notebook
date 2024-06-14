const { isItPossibleToRead } = require('./A');

describe('1862A. Gift Carpet', () => {
  it.each`
    n    | strings                                         | result
    ${1} | ${['vika']}                                     | ${'YES'}
    ${2} | ${['bad', 'car', 'pet']}                        | ${'NO'}
    ${3} | ${['vvvv', 'iiii', 'kkkk', 'aaaa']}             | ${'YES'}
    ${4} | ${['vkak', 'iiai', 'avvk', 'viaa']}             | ${'NO'}
    ${5} | ${['vbickda', 'vbickda', 'vbickda', 'vbickda']} | ${'YES'}
  `('Base test: $n', ({ strings, result }) => {
    expect(isItPossibleToRead(strings)).toBe(result);
  });
});
