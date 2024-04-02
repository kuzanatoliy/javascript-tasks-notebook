const { isItPossibleToMakeAllFriendsHappy } = require('./B');

describe('515A. Drazil and Date', () => {
  it.each`
    n    | m    | mm   | men       | women     | result
    ${1} | ${2} | ${3} | ${[0]}    | ${[1, 0]} | ${'YES'}
    ${2} | ${2} | ${4} | ${[1, 0]} | ${[1, 2]} | ${'NO'}
    ${3} | ${2} | ${3} | ${[1, 0]} | ${[1, 1]} | ${'YES'}
  `('Base test: $n', ({ m, mm, men, women, result }) => {
    expect(isItPossibleToMakeAllFriendsHappy(m, mm, men, women)).toBe(result);
  });
});
