const { getCountOfSteps } = require('./B');

describe('1665A. GCD vs LCM', () => {
  it.each`
    n    | num                          | result
    ${1} | ${[1789]}                    | ${0}
    ${2} | ${[0, 1, 3, 3, 7, 0]}        | ${6}
    ${3} | ${[-1000000000, 1000000000]} | ${2}
    ${4} | ${[4, 3, 2, 1]}              | ${5}
    ${5} | ${[2, 5, 7, 6, 3]}           | ${7}
    ${6} | ${[1, 1, 1, 1, 1, 1, 1]}     | ${0}
  `('Base test: $n', ({ num, result }) => {
    expect(getCountOfSteps(num)).toStrictEqual(result);
  });
});
