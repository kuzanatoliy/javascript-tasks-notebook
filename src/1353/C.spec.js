const { getMinCountOfSteps } = require('./C');

describe('1353C. Board Moves', () => {
  it.each`
    n    | size      | result
    ${1} | ${1}      | ${0n}
    ${2} | ${5}      | ${40n}
    ${3} | ${499993} | ${41664916690999888n}
  `('Base test: $n', ({ size, result }) => {
    expect(getMinCountOfSteps(size)).toBe(result);
  });
});
