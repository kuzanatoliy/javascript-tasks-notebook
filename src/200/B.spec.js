const { checkJuicePice } = require('./B');

describe('200B. Drinks', () => {
  it.each`
    n    | drinks             | result
    ${1} | ${[50, 50, 100]}   | ${66.66666666666667}
    ${2} | ${[0, 25, 50, 75]} | ${37.5}
  `('Base test: $n', ({ drinks, result }) => {
    expect(checkJuicePice(drinks)).toStrictEqual(result);
  });
});
