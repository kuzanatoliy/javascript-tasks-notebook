const { isItPossibleToFeetFriends } = require('./A');

describe('1114A. Got Any Grapes?', () => {
  it.each`
    n    | x    | y    | z    | a    | b    | c    | result
    ${1} | ${1} | ${6} | ${2} | ${4} | ${3} | ${3} | ${'YES'}
    ${2} | ${5} | ${1} | ${1} | ${4} | ${3} | ${2} | ${'NO'}
  `('Base test: $n', ({ x, y, z, a, b, c, result }) => {
    expect(isItPossibleToFeetFriends(x, y, z, a, b, c)).toBe(result);
  });
});
