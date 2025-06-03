const { isItPossibleToTransform } = require('./B');

describe('2114B. Not Quite a Palindromic String', () => {
  it.each`
    n    | map             | k    | result
    ${1} | ${'000000'}     | ${2} | ${'NO'}
    ${2} | ${'01'}         | ${1} | ${'NO'}
    ${3} | ${'1011'}       | ${1} | ${'YES'}
    ${4} | ${'1101011001'} | ${2} | ${'NO'}
    ${5} | ${'1101011001'} | ${1} | ${'YES'}
    ${6} | ${'11'}         | ${1} | ${'YES'}
  `('Base test: $n', ({ map, k, result }) => {
    expect(isItPossibleToTransform(map, k)).toStrictEqual(result);
  });
});
