const { reconstructNumber } = require('./A');

describe('1225A. Forgetting Things', () => {
  it.each`
    n    | a    | b    | result
    ${1} | ${1} | ${2} | ${[19, 20]}
    ${2} | ${4} | ${4} | ${[40, 41]}
    ${3} | ${5} | ${7} | ${[-1]}
    ${4} | ${6} | ${2} | ${[-1]}
  `('Base test: $n', ({ a, b, result }) => {
    expect(reconstructNumber(a, b)).toStrictEqual(result);
  });
});
