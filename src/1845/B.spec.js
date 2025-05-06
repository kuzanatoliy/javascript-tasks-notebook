const { getMaxCommonWayLength } = require('./B');

describe('1845B. Come Together', () => {
  it.each`
    n    | pa        | pb        | pc        | result
    ${1} | ${[3, 1]} | ${[1, 3]} | ${[6, 4]} | ${3}
    ${2} | ${[5, 2]} | ${[2, 2]} | ${[7, 2]} | ${1}
    ${1} | ${[1, 1]} | ${[4, 3]} | ${[5, 5]} | ${6}
  `('Base test: $n', ({ pa, pb, pc, result }) => {
    expect(getMaxCommonWayLength(pa, pb, pc)).toStrictEqual(result);
  });
});
