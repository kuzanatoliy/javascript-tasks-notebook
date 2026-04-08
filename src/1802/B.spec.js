const { getCountOfBoxes } = require('./B');

describe('1802B. Settlement of Guinea Pigs', () => {
  it.each`
    n    | arr                                                             | result
    ${1} | ${[1, 1, 1]}                                                    | ${3}
    ${2} | ${[2, 2, 2]}                                                    | ${0}
    ${3} | ${[1, 1, 1, 2, 1]}                                              | ${3}
    ${4} | ${[1, 2, 1, 2, 1, 2, 1, 2, 1, 2]}                               | ${4}
    ${5} | ${[1, 2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1]} | ${12}
    ${6} | ${[2, 1, 1, 2, 1, 1, 2, 1, 2, 2, 1, 1, 1, 2, 2, 1, 1, 1, 1, 2]} | ${9}
  `('Base test: $n', ({ arr, result }) => {
    expect(getCountOfBoxes(arr)).toBe(result);
  });
});
