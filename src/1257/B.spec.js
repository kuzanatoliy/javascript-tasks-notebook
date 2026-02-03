const { isItPossilbeToTransform } = require('./B');

describe('1257B. Magic Stick', () => {
  it.each`
    n    | x        | y          | result
    ${1} | ${2}     | ${3}       | ${'YES'}
    ${2} | ${1}     | ${1}       | ${'YES'}
    ${3} | ${3}     | ${6}       | ${'NO'}
    ${4} | ${6}     | ${8}       | ${'YES'}
    ${5} | ${1}     | ${2}       | ${'NO'}
    ${6} | ${4}     | ${1}       | ${'YES'}
    ${7} | ${31235} | ${6578234} | ${'YES'}
  `('Base test: $n', ({ x, y, result }) => {
    expect(isItPossilbeToTransform(x, y)).toBe(result);
  });
});
