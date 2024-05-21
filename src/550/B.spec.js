const { getCountContest } = require('./B');

describe('550B. Preparing Olympiad', () => {
  it.each`
    n    | diff                    | l     | r     | x     | result
    ${1} | ${[1, 2, 3]}            | ${5}  | ${6}  | ${1}  | ${2}
    ${2} | ${[10, 20, 30, 25]}     | ${40} | ${50} | ${10} | ${2}
    ${3} | ${[10, 10, 20, 10, 20]} | ${25} | ${35} | ${10} | ${6}
  `('Base test: $n', ({ diff, l, r, x, result }) => {
    expect(getCountContest(diff, l, r, x)).toStrictEqual(result);
  });
});
