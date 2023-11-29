const { getRoundNumbers } = require('./A');

describe('1352A. Sum of Round Numbers', () => {
  it.each`
    n    | number   | result
    ${1} | ${5009}  | ${[5000, 9]}
    ${2} | ${7}     | ${[7]}
    ${3} | ${9876}  | ${[9000, 800, 70, 6]}
    ${4} | ${10000} | ${[10000]}
    ${5} | ${10}    | ${[10]}
  `('Base test: $n', ({ number, result }) => {
    expect(getRoundNumbers(number)).toStrictEqual([result.length, result]);
  });
});
