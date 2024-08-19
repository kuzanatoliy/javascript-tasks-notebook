const { getMaximumBeautyOfJourney } = require('./A');

describe('1320A. Add Odd or Subtract Even', () => {
  it.each`
    n    | array                         | result
    ${1} | ${[10, 7, 1, 9, 10, 15]}      | ${26}
    ${2} | ${[400000]}                   | ${400000}
    ${3} | ${[8, 9, 26, 11, 12, 29, 14]} | ${55}
  `('Base test: $n', ({ array, result }) => {
    expect(getMaximumBeautyOfJourney(array)).toBe(result);
  });
});
