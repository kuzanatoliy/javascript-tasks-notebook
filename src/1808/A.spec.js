const { getTheBestChoice } = require('./A');

describe('1808A. Lucky Numbers', () => {
  it.each`
    n    | l     | r      | result
    ${1} | ${59} | ${63}  | ${60}
    ${2} | ${42} | ${49}  | ${49}
    ${3} | ${15} | ${15}  | ${15}
    ${4} | ${53} | ${57}  | ${53}
    ${5} | ${1}  | ${100} | ${90}
    ${6} | ${96} | ${199} | ${190}
  `('Base test: $n', ({ l, r, result }) => {
    expect(getTheBestChoice(l, r)).toBe(result);
  });
});
