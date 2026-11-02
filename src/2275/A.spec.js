const { getCoordinates } = require('./A');

describe('2275A. In Search of Convenience', () => {
  it.each`
    n    | x     | y     | r     | result
    ${1} | ${0}  | ${0}  | ${1}  | ${[-1, 0]}
    ${2} | ${5}  | ${5}  | ${5}  | ${[0, 5]}
    ${3} | ${10} | ${10} | ${13} | ${[-3, 10]}
  `('Base test: $n', ({ x, y, r, result }) => {
    expect(getCoordinates(x, y, r)).toStrictEqual(result);
  });
});
