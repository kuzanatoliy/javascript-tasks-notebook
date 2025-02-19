const { getBoard } = require('./A');

describe('384A. Coder', () => {
  it.each`
    n    | num  | result
    ${1} | ${2} | ${[2, ['C', '.'], ['.', 'C']]}
    ${2} | ${3} | ${[5, ['C', '.', 'C'], ['.', 'C', '.'], ['C', '.', 'C']]}
  `('Base test: $n', ({ num, result }) => {
    expect(getBoard(num)).toStrictEqual(result);
  });
});
