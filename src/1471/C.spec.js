const { getMinCost } = require('./C');

describe('1471C. Strange Birthday Party', () => {
  it.each`
    n    | friends            | costs                     | result
    ${1} | ${[2, 3, 4, 3, 2]} | ${[3, 5, 12, 20]}         | ${30}
    ${2} | ${[5, 4, 3, 2, 1]} | ${[10, 40, 90, 160, 250]} | ${190}
    ${3} | ${[1]}             | ${[1]}                    | ${1}
  `('Base test: $n', ({ friends, costs, result }) => {
    expect(getMinCost(friends, costs)).toBe(result);
  });
});
