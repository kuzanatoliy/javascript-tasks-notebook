const { getCountOfDays } = require('./A');

describe('1335A. Candies and Two Sisters', () => {
  it.each`
    n    | count        | result
    ${1} | ${3}         | ${1}
    ${2} | ${6}         | ${2}
    ${3} | ${7}         | ${1}
    ${4} | ${21}        | ${7}
    ${5} | ${28}        | ${4}
    ${6} | ${999999999} | ${333333333}
    ${7} | ${999999984} | ${333333328}
  `('Base test: $n', ({ count, result }) => {
    expect(getCountOfDays(count)).toBe(result);
  });
});
