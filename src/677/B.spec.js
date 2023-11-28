const { checkCountOfPotato } = require('./B');

describe('677B. Vanya and Food Processor', () => {
  it.each`
    n    | height | step | potatoes           | result
    ${1} | ${6}   | ${3} | ${[5, 4, 3, 2, 1]} | ${5}
    ${2} | ${6}   | ${3} | ${[5, 5, 5, 5, 5]} | ${10}
    ${3} | ${6}   | ${3} | ${[1, 2, 1, 1, 1]} | ${2}
  `('Base test: $n', ({ height, potatoes, step, result }) => {
    expect(checkCountOfPotato(height, step, potatoes)).toBe(result);
  });
});
