const { checkWinner } = require('./A');

describe('734A. Anton and Danik', () => {
  it.each`
    n    | playList     | result
    ${1} | ${'ADAAAA'}  | ${'Anton'}
    ${2} | ${'DDDAADA'} | ${'Danik'}
    ${3} | ${'DADADA'}  | ${'Friendship'}
  `('Base test: $n', ({ playList, result }) => {
    expect(checkWinner(playList)).toBe(result);
  });
});
