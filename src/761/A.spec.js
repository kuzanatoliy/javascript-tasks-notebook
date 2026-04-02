const { isExisted } = require('./A');

describe('761A. Dasha and Stairs', () => {
  it.each`
    n    | l    | r    | result
    ${1} | ${2} | ${3} | ${'YES'}
    ${2} | ${3} | ${1} | ${'NO'}
    ${3} | ${0} | ${0} | ${'NO'}
  `('Base test: $n', ({ l, r, result }) => {
    expect(isExisted(l, r)).toBe(result);
  });
});
