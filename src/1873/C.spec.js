const { getTotalPoints } = require('./C');

describe('1873C. Target Practice', () => {
  it.each`
    n    | target                                                                                                                                          | result
    ${1} | ${['X.........', '..........', '.......X..', '.....X....', '......X...', '..........', '.........X', '..X.......', '..........', '.........X']} | ${17}
    ${2} | ${['..........', '..........', '..........', '..........', '..........', '..........', '..........', '..........', '..........', '..........']} | ${0}
    ${3} | ${['..........', '..........', '..........', '..........', '....X.....', '..........', '..........', '..........', '..........', '..........']} | ${5}
    ${4} | ${['XXXXXXXXXX', 'XXXXXXXXXX', 'XXXXXXXXXX', 'XXXXXXXXXX', 'XXXXXXXXXX', 'XXXXXXXXXX', 'XXXXXXXXXX', 'XXXXXXXXXX', 'XXXXXXXXXX', 'XXXXXXXXXX']} | ${220}
  `('Base test: $n', ({ target, result }) => {
    expect(getTotalPoints(target)).toBe(result);
  });
});
