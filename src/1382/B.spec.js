const { isSolutionExisted } = require('./B');

describe('1382B. Sequential Nim', () => {
  it.each`
    n    | stones                      | result
    ${1} | ${[2, 5, 4]}                | ${'First'}
    ${2} | ${[1, 1, 1, 1, 1, 1, 1, 1]} | ${'Second'}
    ${3} | ${[1, 2, 3, 4, 5, 6]}       | ${'Second'}
    ${4} | ${[1, 1, 2, 1, 2, 2]}       | ${'First'}
    ${5} | ${[1000000000]}             | ${'First'}
    ${6} | ${[1, 2, 2, 1, 1]}          | ${'Second'}
    ${7} | ${[1, 1, 1]}                | ${'First'}
  `('Base test: $n', ({ number1, number2, result }) => {
    expect(isSolutionExisted(number1, number2)).toStrictEqual(result);
  });
});
