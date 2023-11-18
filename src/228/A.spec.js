const { checkMinHorseshoes } = require('./A');

describe('228A. Is your horseshoe on the other hoof?', () => {
  it.each`
    n    | horses          | result
    ${1} | ${[1, 7, 3, 3]} | ${1}
    ${2} | ${[7, 7, 7, 7]} | ${3}
  `('Base test: $n', ({ horses, result }) => {
    expect(checkMinHorseshoes(horses)).toBe(result);
  });
});
