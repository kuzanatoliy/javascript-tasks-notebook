const { getTringleSides } = require('./A');

describe('1337A. Ichihime and Triangle', () => {
  it.each`
    n    | array                               | result
    ${1} | ${[1, 3, 5, 7]}                     | ${[3, 5, 5]}
    ${2} | ${[1, 5, 5, 7]}                     | ${[5, 5, 5]}
    ${3} | ${[100000, 200000, 300000, 400000]} | ${[200000, 300000, 300000]}
    ${4} | ${[1, 1, 977539810, 977539810]}     | ${[1, 977539810, 977539810]}
  `('Base test: $n', ({ array, result }) => {
    expect(getTringleSides(array)).toStrictEqual(result);
  });
});
