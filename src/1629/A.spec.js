const { getMaxPossibleMemory } = require('./A');

describe('1629A. Download More RAM', () => {
  it.each`
    n    | programs                | memories                     | memory | result
    ${1} | ${[20, 30, 10]}         | ${[9, 100, 10]}              | ${10}  | ${29}
    ${2} | ${[1, 1, 5, 1, 1]}      | ${[1, 1, 1, 1, 1]}           | ${1}   | ${6}
    ${3} | ${[2, 2, 2, 2, 2]}      | ${[100, 100, 100, 100, 100]} | ${1}   | ${1}
    ${4} | ${[128, 64, 32, 16, 8]} | ${[128, 64, 32, 16, 8]}      | ${8}   | ${256}
  `('Base test: $n', ({ programs, memories, memory, result }) => {
    expect(getMaxPossibleMemory(programs, memories, memory)).toBe(result);
  });
});
