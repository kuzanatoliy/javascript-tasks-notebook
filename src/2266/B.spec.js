const { getMinWeakParticipantsCount } = require('./B');

describe('2266B. Three Piles', () => {
  it.each`
    n    | a           | b           | c            | result
    ${1} | ${3}        | ${6}        | ${3}         | ${3}
    ${2} | ${3}        | ${6}        | ${10}        | ${7}
    ${3} | ${5}        | ${5}        | ${4}         | ${4}
    ${4} | ${2}        | ${5}        | ${6}         | ${3}
    ${5} | ${67676767} | ${41414141} | ${998244353} | ${1024506979}
  `('Base test: $n', ({ a, b, c, result }) => {
    expect(getMinWeakParticipantsCount(a, b, c)).toBe(result);
  });
});
