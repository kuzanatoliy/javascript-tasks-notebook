const { getOrder } = require('./B');

describe('1878B. Aleksa and Stack', () => {
  it.each`
    n    | number | result
    ${1} | ${3}   | ${[1, 3, 5]}
    ${2} | ${6}   | ${[1, 3, 5, 7, 9, 11]}
    ${3} | ${7}   | ${[1, 3, 5, 7, 9, 11, 13]}
  `('Base test: $n', ({ number, result }) => {
    expect(getOrder(number)).toStrictEqual(result);
  });
});
