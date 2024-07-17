const { getCountOfCookies } = require('./D1');

describe('670D1. Magic Powder - 1', () => {
  it.each`
    n    | limits          | stores              | k    | result
    ${1} | ${[2, 1, 4]}    | ${[11, 3, 16]}      | ${1} | ${4}
    ${2} | ${[4, 3, 5, 6]} | ${[11, 12, 14, 20]} | ${3} | ${3}
  `('Base test: $n', ({ limits, stores, k, result }) => {
    expect(getCountOfCookies(limits, stores, k)).toBe(result);
  });
});
