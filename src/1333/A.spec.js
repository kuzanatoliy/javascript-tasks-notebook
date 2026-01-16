const { getDesk } = require('./A');

describe('1333A. Little Artem', () => {
  it.each`
    n    | r    | c    | result
    ${1} | ${3} | ${2} | ${[['W', 'B'], ['B', 'B'], ['B', 'B']]}
    ${2} | ${3} | ${3} | ${[['W', 'B', 'B'], ['B', 'B', 'B'], ['B', 'B', 'B']]}
  `('Base test: $n', ({ r, c, result }) => {
    expect(getDesk(r, c)).toStrictEqual(result);
  });
});
