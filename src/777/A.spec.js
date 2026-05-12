const { getInitPosition } = require('./A');

describe('777A. Shell Game', () => {
  it.each`
    n    | num  | position | result
    ${1} | ${4} | ${2}     | ${1}
    ${2} | ${1} | ${1}     | ${0}
  `('Base test: $n', ({ num, position, result }) => {
    expect(getInitPosition(num, position)).toStrictEqual(result);
  });
});
