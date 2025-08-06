const { getShopsOnDay } = require('./B');

describe('706A. Beru-taxi', () => {
  it.each`
    n    | x                    | mis               | result
    ${1} | ${[3, 10, 8, 6, 11]} | ${[1, 10, 3, 11]} | ${[0, 4, 1, 5]}
  `('Base test: $n', ({ x, mis, result }) => {
    expect(getShopsOnDay(x, mis)).toStrictEqual(result);
  });
});
