const { getCountOfPacks } = require('./A');

describe('965A. Paper Airplanes', () => {
  it.each`
    n    | k    | num  | s      | p    | result
    ${1} | ${5} | ${3} | ${2}   | ${3} | ${4}
    ${2} | ${5} | ${3} | ${100} | ${1} | ${5}
  `('Base test: $n', ({ k, num, s, p, result }) => {
    expect(getCountOfPacks(k, num, s, p)).toBe(result);
  });
});
