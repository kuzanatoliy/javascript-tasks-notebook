const { isArrayExisted } = require('./A');

describe('1620A. Equal or Not Equal', () => {
  it.each`
    n    | map          | result
    ${1} | ${'EEE'}     | ${'YES'}
    ${2} | ${'EN'}      | ${'NO'}
    ${3} | ${'ENNEENE'} | ${'YES'}
    ${4} | ${'NENN'}    | ${'YES'}
  `('Base test: $n', ({ map, result }) => {
    expect(isArrayExisted(map)).toBe(result);
  });
});
