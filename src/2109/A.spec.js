const { hasLiar } = require('./A');

describe("2109A. It's Time To Duel", () => {
  it.each`
    n    | snum                     | result
    ${1} | ${[0, 1, 0]}             | ${'NO'}
    ${2} | ${[0, 0]}                | ${'YES'}
    ${3} | ${[1, 1]}                | ${'YES'}
    ${4} | ${[0, 1, 1, 1]}          | ${'NO'}
    ${5} | ${[1, 0, 0, 1]}          | ${'YES'}
    ${6} | ${[0, 1, 0, 1, 0, 1, 0]} | ${'NO'}
  `('Base test: $n', ({ snum, result }) => {
    expect(hasLiar(snum)).toBe(result);
  });
});
