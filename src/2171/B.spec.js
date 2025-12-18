const { transformArray } = require('./B');

describe('2171A. Shizuku Hoshikawa and Farm Legs', () => {
  it.each`
    n    | arr                             | result
    ${1} | ${[2, -1, 7, 1]}                | ${[2, 0, 7, 1]}
    ${2} | ${[-1, 2, 4, -1]}               | ${[0, 2, 4, 0]}
    ${3} | ${[2, -1, 1, 5, 11, 12, 1, -1]} | ${[2, 0, 1, 5, 11, 12, 1, 2]}
    ${4} | ${[-1, -1, -1]}                 | ${[0, 0, 0]}
    ${5} | ${[2, 5, 4]}                    | ${[2, 5, 4]}
    ${6} | ${[-1, 5]}                      | ${[5, 5]}
  `('Base test: $n', ({ arr, result }) => {
    expect(transformArray(arr)).toStrictEqual(result);
  });
});
