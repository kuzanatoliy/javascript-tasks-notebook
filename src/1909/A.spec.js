const { isItPossibleToReach } = require('./A');

describe('1909A. Distinct Buttons', () => {
  it.each`
    n    | points                                                        | result
    ${1} | ${[[1, -1], [0, 0], [1, -1]]}                                 | ${'YES'}
    ${2} | ${[[-3, -2], [-3, -1], [-3, 0], [-3, 1]]}                     | ${'YES'}
    ${3} | ${[[1, 1], [-1, -1], [1, -1], [-1, 1]]}                       | ${'NO'}
    ${4} | ${[[-4, 11], [-9, -13], [14, 15], [-8, -4], [19, 9]]}         | ${'NO'}
    ${5} | ${[[82, 64], [39, 91], [3, 46], [87, 83], [74, 21], [7, 25]]} | ${'YES'}
    ${6} | ${[[100, -100]]}                                              | ${'YES'}
  `('Base test: $n', ({ points, result }) => {
    expect(isItPossibleToReach(points)).toBe(result);
  });
});
