const { getCountOfOne } = require('./A');

describe('2106A. Dr. TC', () => {
  it.each`
    n    | snum       | result
    ${1} | ${'101'}   | ${5}
    ${2} | ${'1'}     | ${0}
    ${3} | ${'00000'} | ${5}
    ${4} | ${'11'}    | ${2}
    ${5} | ${'010'}   | ${4}
  `('Base test: $n', ({ snum, result }) => {
    expect(getCountOfOne(snum)).toBe(result);
  });
});
