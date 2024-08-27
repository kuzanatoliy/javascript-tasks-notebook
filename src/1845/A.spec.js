const { getArray } = require('./A');

describe('1845A. Forbidden Integer', () => {
  it.each`
    n    | props         | result
    ${1} | ${[10, 3, 2]} | ${['YES', 10, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]]}
    ${2} | ${[5, 2, 1]}  | ${['NO']}
    ${1} | ${[4, 2, 1]}  | ${['YES', 2, [2, 2]]}
    ${1} | ${[7, 7, 3]}  | ${['YES', 7, [1, 1, 1, 1, 1, 1, 1]]}
    ${2} | ${[6, 1, 1]}  | ${['NO']}
  `('Base test: $n', ({ props, result }) => {
    expect(getArray(props)).toStrictEqual(result);
  });
});
