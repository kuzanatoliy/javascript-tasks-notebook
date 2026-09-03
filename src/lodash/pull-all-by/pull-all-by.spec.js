const { pullAllBy } = require('./pull-all-by');

describe('Lodash: pullAllBy function', () => {
  it.each`
    n    | arr                                         | values                  | key    | result
    ${1} | ${[{ x: 1 }, { x: 2 }, { x: 3 }, { x: 1 }]} | ${[{ x: 1 }, { x: 3 }]} | ${'x'} | ${[{ x: 2 }]}
    ${2} | ${[{ x: 1 }, { x: 2 }, { x: 3 }, { x: 1 }]} | ${[{ x: 1 }]}           | ${'x'} | ${[{ x: 2 }, { x: 3 }]}
    ${3} | ${[{ x: 1 }, { x: 2 }, { x: 3 }, { x: 1 }]} | ${[{ x: 1 }, { x: 3 }]} | ${'y'} | ${[]}
  `('Base test: $n', ({ arr, values, key, result }) => {
    expect(pullAllBy(arr, values, key)).toStrictEqual(result);
  });
});
