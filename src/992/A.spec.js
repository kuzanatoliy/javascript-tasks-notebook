const { getCountOfSteps } = require('./A');

describe('992A. Nastya and an Array', () => {
  it.each`
    n    | arr                | result
    ${1} | ${[1, 1, 1, 1, 1]} | ${1}
    ${2} | ${[2, 0, -1]}      | ${2}
    ${3} | ${[5, -6, -5, 1]}  | ${4}
  `('Base test: $n', ({ arr, result }) => {
    expect(getCountOfSteps(arr)).toStrictEqual(result);
  });
});
