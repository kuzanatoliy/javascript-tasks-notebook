const { getMinWeakParticipantsCount } = require('./A');

describe('2266A. Good Contest', () => {
  it.each`
    n    | num  | arr          | result
    ${1} | ${3} | ${[3, 3, 3]} | ${0}
    ${2} | ${4} | ${[4, 3, 3]} | ${1}
    ${3} | ${1} | ${[1, 1, 1]} | ${0}
    ${4} | ${9} | ${[9, 8, 9]} | ${1}
    ${5} | ${5} | ${[0, 5, 5]} | ${5}
    ${6} | ${6} | ${[4, 3, 2]} | ${4}
  `('Base test: $n', ({ num, arr, result }) => {
    expect(getMinWeakParticipantsCount(num, arr)).toBe(result);
  });
});
