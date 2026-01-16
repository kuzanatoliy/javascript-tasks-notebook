const { getCountOfAdditionalWalksAndShedule } = require('./B');

describe('732B. Cormen — The Best Friend Of a Man', () => {
  it.each`
    n    | arr             | k    | result
    ${1} | ${[2, 0, 1]}    | ${5} | ${[4, [2, 3, 2]]}
    ${2} | ${[0, 0, 0]}    | ${1} | ${[1, [0, 1, 0]]}
    ${3} | ${[2, 4, 3, 5]} | ${6} | ${[0, [2, 4, 3, 5]]}
  `('Base test: $n', ({ arr, k, result }) => {
    expect(getCountOfAdditionalWalksAndShedule(arr, k)).toStrictEqual(result);
  });
});
