const { getMaxPossibleValue } = require('./A');

describe('1553A. Cherry', () => {
  it.each`
    n    | array                                               | result
    ${1} | ${[2, 4, 3]}                                        | ${12}
    ${2} | ${[3, 2, 3, 1]}                                     | ${6}
    ${3} | ${[69, 69]}                                         | ${4761}
    ${4} | ${[719313, 273225, 402638, 473783, 804745, 323328]} | ${381274500335}
  `('Base test: $n', ({ array, result }) => {
    expect(getMaxPossibleValue(array)).toBe(result);
  });
});
