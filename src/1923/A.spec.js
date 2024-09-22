const { getCountOfSteps } = require('./A');

describe('1923A. Moving Chips', () => {
  it.each`
    n    | arr                            | result
    ${1} | ${[0, 1, 1, 1, 0, 1, 1, 0]}    | ${1}
    ${2} | ${[0, 1, 0, 0, 0, 0]}          | ${0}
    ${3} | ${[1, 1, 1, 1, 1, 1]}          | ${0}
    ${4} | ${[1, 0, 1, 0, 1]}             | ${2}
    ${5} | ${[0, 1, 1, 0, 0, 0, 1, 1, 0]} | ${3}
  `('Base test: $n', ({ arr, result }) => {
    expect(getCountOfSteps(arr)).toBe(result);
  });
});
