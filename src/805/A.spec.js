const { getMaxCountOfItems } = require('./A');

describe('805A. Fake NP', () => {
  it.each`
    n    | l     | r     | result
    ${1} | ${19} | ${29} | ${2}
    ${2} | ${3}  | ${6}  | ${2}
    ${3} | ${3}  | ${3}  | ${3}
  `('Base test: $n', ({ l, r, result }) => {
    expect(getMaxCountOfItems(l, r)).toBe(result);
  });
});
