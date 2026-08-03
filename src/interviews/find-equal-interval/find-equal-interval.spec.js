const { findEqualInterval } = require('./find-equal-interval');

describe('findEqualInterval', () => {
  it.each`
    n    | arr                                     | target | result
    ${1} | ${[]}                                   | ${10}  | ${[]}
    ${2} | ${[1, 2, 2, 2, 2, 3, 4, 4, 4, 6, 6, 7]} | ${5}   | ${[]}
    ${3} | ${[1, 1, 2, 2, 3, 3, 4, 4, 4, 5, 5]}    | ${4}   | ${[6, 8]}
  `('Base test: $n', ({ arr, target, result }) => {
    expect(findEqualInterval(arr, target)).toStrictEqual(result);
  });
});
