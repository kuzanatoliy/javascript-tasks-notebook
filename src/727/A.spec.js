const { isItPossibleToBuild } = require('./A');

describe('727A. Transformation: from A to B', () => {
  it.each`
    n    | a      | b        | result
    ${1} | ${2}   | ${162}   | ${['YES', [2, 4, 8, 81, 162]]}
    ${2} | ${4}   | ${42}    | ${['NO']}
    ${3} | ${100} | ${40021} | ${['YES', [100, 200, 2001, 4002, 40021]]}
  `('Base test: $n', ({ a, b, result }) => {
    expect(isItPossibleToBuild(a, b)).toStrictEqual(result);
  });
});
