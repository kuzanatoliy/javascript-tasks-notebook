const { getMinCountOfCaracters } = require('./A');

describe("1820A. Yura's New Name", () => {
  it.each`
    n    | str                 | result
    ${1} | ${'^______^'}       | ${5}
    ${2} | ${'___^_^^^_^___^'} | ${5}
    ${3} | ${'^_'}             | ${1}
    ${4} | ${'^'}              | ${1}
    ${5} | ${'^_^^^^^_^_^^'}   | ${0}
    ${6} | ${'___^^'}          | ${3}
    ${7} | ${'_'}              | ${2}
  `('Base test: $n', ({ str, result }) => {
    expect(getMinCountOfCaracters(str)).toBe(result);
  });
});
