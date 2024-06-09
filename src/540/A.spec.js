const { getCountOfOperations } = require('./A');

describe('540A. Combination Lock', () => {
  it.each`
    n    | origin     | target     | result
    ${1} | ${'82195'} | ${'64723'} | ${13}
  `('Base test: $n', ({ origin, target, result }) => {
    expect(getCountOfOperations(origin, target)).toBe(result);
  });
});
