const { isLucky } = require('./A');

describe('1676A. Lucky?', () => {
  it.each`
    n    | number      | result
    ${1} | ${'213132'} | ${'YES'}
    ${2} | ${'973894'} | ${'NO'}
    ${3} | ${'045207'} | ${'YES'}
    ${4} | ${'000000'} | ${'YES'}
    ${5} | ${'055776'} | ${'NO'}
  `('Base test: $n', ({ number, result }) => {
    expect(isLucky(number)).toBe(result);
  });
});
