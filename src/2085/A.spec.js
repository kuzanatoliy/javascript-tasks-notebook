const { isItPossibleToTransform } = require('./A');

describe('2085A. Serval and String Theory', () => {
  it.each`
    n    | str                      | count    | result
    ${1} | ${'a'}                   | ${10000} | ${'NO'}
    ${2} | ${'rev'}                 | ${3}     | ${'YES'}
    ${3} | ${'string'}              | ${0}     | ${'NO'}
    ${4} | ${'theory'}              | ${0}     | ${'YES'}
    ${5} | ${'universal'}           | ${2}     | ${'YES'}
    ${6} | ${'codeforcesecrofedoc'} | ${0}     | ${'NO'}
    ${7} | ${'codeforcesecrofedoc'} | ${1}     | ${'YES'}
    ${8} | ${'zzz'}                 | ${1}     | ${'NO'}
  `('Base test: $n', ({ str, count, result }) => {
    expect(isItPossibleToTransform(str, count)).toBe(result);
  });
});
