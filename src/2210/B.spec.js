const { getCountOfChairs } = require('./B');

describe('2210B. Simply Sitting on Chairs', () => {
  it.each`
    n    | arr                | result
    ${1} | ${[3, 2, 1]}       | ${2}
    ${2} | ${[4, 3, 2, 5, 1]} | ${2}
    ${3} | ${[4, 2, 1, 3]}    | ${3}
    ${4} | ${[2, 3, 4, 1]}    | ${1}
  `('Base test: $n', ({ arr, result }) => {
    expect(getCountOfChairs(arr)).toStrictEqual(result);
  });
});
