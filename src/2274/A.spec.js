const { getSkipedDocuments } = require('./A');

describe('2274A. The Projections of Paco', () => {
  it.each`
    n    | arr               | result
    ${1} | ${[3]}            | ${3}
    ${2} | ${[2, 5]}         | ${-3}
    ${3} | ${[2, 7, 1]}      | ${-4}
    ${4} | ${[-3, 0, -3, 0]} | ${-6}
    ${5} | ${[0]}            | ${0}
  `('Base test: $n', ({ arr, result }) => {
    expect(getSkipedDocuments(arr)).toBe(result);
  });
});
