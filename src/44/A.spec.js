const { getCountOfLeaves } = require('./A');

describe('44A. Indian Summer', () => {
  it.each`
    n    | flowers                                                                                                  | result
    ${1} | ${[['birch', 'yellow'], ['maple', 'red'], ['birch', 'yellow'], ['maple', 'yellow'], ['maple', 'green']]} | ${4}
    ${2} | ${[['oak', 'yellow'], ['oak', 'yellow'], ['oak', 'yellow']]}                                             | ${1}
  `('Base test: $n', ({ flowers, result }) => {
    expect(getCountOfLeaves(flowers)).toBe(result);
  });
});
