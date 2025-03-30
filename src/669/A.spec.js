const { getCountOfTimes } = require('./A');

describe('669A. Little Artem and Presents', () => {
  it.each`
    n    | num  | result
    ${1} | ${1} | ${1}
    ${2} | ${2} | ${1}
    ${3} | ${3} | ${2}
    ${4} | ${4} | ${3}
  `('Base test: $n', ({ num, result }) => {
    expect(getCountOfTimes(num)).toBe(result);
  });
});
