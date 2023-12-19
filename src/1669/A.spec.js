const { getDivision } = require('./A');

describe('1669A. Division?', () => {
  it.each`
    n    | rating  | result
    ${1} | ${-789} | ${'Division 4'}
    ${2} | ${1299} | ${'Division 4'}
    ${3} | ${1300} | ${'Division 4'}
    ${4} | ${1399} | ${'Division 4'}
    ${5} | ${1400} | ${'Division 3'}
    ${6} | ${1679} | ${'Division 2'}
    ${7} | ${2300} | ${'Division 1'}
  `('Base test: $n', ({ rating, result }) => {
    expect(getDivision(rating)).toBe(result);
  });
});
