const { getCountOfGlasses } = require('./B');

describe('676B. Pyramid of Glasses', () => {
  it.each`
    n    | count | time | result
    ${1} | ${3}  | ${5} | ${4}
    ${2} | ${4}  | ${8} | ${6}
  `('Base test: $n', ({ count, time, result }) => {
    expect(getCountOfGlasses(count, time)).toBe(result);
  });
});
