const { getPosition } = require('./C');

describe('1560C. Infinity Table', () => {
  it.each`
    n    | number        | result
    ${1} | ${11}         | ${[2, 4]}
    ${2} | ${14}         | ${[4, 3]}
    ${3} | ${5}          | ${[1, 3]}
    ${4} | ${4}          | ${[2, 1]}
    ${5} | ${1}          | ${[1, 1]}
    ${6} | ${2}          | ${[1, 2]}
    ${7} | ${1000000000} | ${[31623, 14130]}
  `('Base test: $n', ({ number, result }) => {
    expect(getPosition(number)).toStrictEqual(result);
  });
});
