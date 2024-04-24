const { getMaxNumberOfModels } = require('./B');

describe('1350B. Orac and Models', () => {
  it.each`
    n    | array                    | result
    ${1} | ${[5, 3, 4, 6]}          | ${2}
    ${2} | ${[1, 4, 2, 3, 6, 4, 9]} | ${3}
    ${3} | ${[5, 4, 3, 2, 1]}       | ${1}
    ${4} | ${[9]}                   | ${1}
  `('Base test: $n', ({ array, result }) => {
    expect(getMaxNumberOfModels(array)).toBe(result);
  });
});
