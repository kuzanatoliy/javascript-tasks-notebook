const { getTemperature } = require('./M');

describe('847M. Weather Tomorrow', () => {
  it.each`
    n    | arr                    | result
    ${1} | ${[10, 5, 0, -5, -10]} | ${-15}
    ${2} | ${[1, 1, 1, 1]}        | ${1}
    ${3} | ${[5, 1, -5]}          | ${-5}
    ${4} | ${[900, 1000]}         | ${1100}
  `('Base test: $n', ({ arr, result }) => {
    expect(getTemperature(arr)).toBe(result);
  });
});
