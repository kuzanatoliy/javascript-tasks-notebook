const { isReorderingExist } = require('./B');

describe('1807B. Grab the Candies', () => {
  it.each`
    n    | array           | result
    ${1} | ${[1, 2, 3, 4]} | ${'YES'}
    ${2} | ${[1, 1, 1, 2]} | ${'NO'}
    ${3} | ${[1, 4, 3]}    | ${'NO'}
  `('Base test: $n', ({ array, result }) => {
    expect(isReorderingExist(array)).toBe(result);
  });
});
