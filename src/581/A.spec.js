const { getCountOfSocksPairs } = require('./A');

describe('581A. Vasya the Hipster', () => {
  it.each`
    n    | redSocks | blueSocks | result
    ${1} | ${3}     | ${1}      | ${[1, 1]}
    ${2} | ${2}     | ${3}      | ${[2, 0]}
    ${3} | ${7}     | ${3}      | ${[3, 2]}
  `('Base test: $n', ({ redSocks, blueSocks, result }) => {
    expect(getCountOfSocksPairs(redSocks, blueSocks)).toStrictEqual(result);
  });
});
