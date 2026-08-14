const { getMinCost } = require('./C');

describe('1997A. Strong Password', () => {
  it.each`
    n    | str           | result
    ${1} | ${'_(_)_)'}   | ${5}
    ${2} | ${'_)'}       | ${1}
    ${3} | ${'_)_)_)_)'} | ${4}
    ${4} | ${'_(_)_(_)'} | ${8}
  `('Base test: $n', ({ str, result }) => {
    expect(getMinCost(str)).toBe(result);
  });
});
