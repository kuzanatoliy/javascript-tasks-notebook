const { getCountOfSteps } = require('./C');

describe('2009C. The Legend of Freya the Frog', () => {
  it.each`
    n    | x          | y         | k     | result
    ${1} | ${9}       | ${11}     | ${3}  | ${8}
    ${2} | ${0}       | ${10}     | ${8}  | ${4}
    ${3} | ${1000000} | ${100000} | ${10} | ${199999}
  `('Base test: $n', ({ x, y, k, result }) => {
    expect(getCountOfSteps(x, y, k)).toBe(result);
  });
});
