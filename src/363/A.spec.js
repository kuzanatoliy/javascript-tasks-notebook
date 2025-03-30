const { getView } = require('./A');

describe('363A. Soroban', () => {
  it.each`
    n    | num    | result
    ${1} | ${2}   | ${['O-|OO-OO']}
    ${2} | ${13}  | ${['O-|OOO-O', 'O-|O-OOO']}
    ${3} | ${720} | ${['O-|-OOOO', 'O-|OO-OO', '-O|OO-OO']}
  `('Base test: $n', ({ num, result }) => {
    expect(getView(num)).toStrictEqual(result);
  });
});
