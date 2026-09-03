const { pullAllWith } = require('./pull-all-with');

describe('Lodash: pullAllWith function', () => {
  it.each`
    n    | arr                                                 | values              | comparator                              | result
    ${1} | ${[{ x: 1, y: 2 }, { x: 3, y: 4 }, { x: 5, y: 6 }]} | ${[{ x: 3, y: 4 }]} | ${(a, b) => a.x === b.x && a.y === b.y} | ${[{ x: 1, y: 2 }, { x: 5, y: 6 }]}
    ${2} | ${[{ x: 1, y: 2 }, { x: 3, y: 4 }, { x: 3, y: 6 }]} | ${[{ x: 3, y: 4 }]} | ${(a, b) => a.x === b.x}                | ${[{ x: 1, y: 2 }]}
    ${3} | ${[{ x: 1, y: 2 }, { x: 3, y: 4 }, { x: 5, y: 6 }]} | ${[{ x: 3, y: 4 }]} | ${() => true}                           | ${[]}
  `('Base test: $n', ({ arr, values, comparator, result }) => {
    expect(pullAllWith(arr, values, comparator)).toStrictEqual(result);
  });
});
