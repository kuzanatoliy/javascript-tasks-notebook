const { getNumbers } = require('./A');

describe('1699A. The Third Three Number Problem', () => {
  it.each`
    n    | num          | result
    ${1} | ${4}         | ${[0, 0, 2]}
    ${2} | ${1}         | ${[-1]}
    ${3} | ${12}        | ${[0, 0, 6]}
    ${4} | ${2046}      | ${[0, 0, 1023]}
    ${5} | ${194723326} | ${[0, 0, 97361663]}
  `('Base test: $n', ({ num, result }) => {
    expect(getNumbers(num)).toStrictEqual(result);
  });
});
