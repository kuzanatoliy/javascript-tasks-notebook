const { getCountOfOperations } = require('./A');

describe('1141A. Game 23', () => {
  it.each`
    n    | num    | m        | result
    ${1} | ${120} | ${51840} | ${7}
    ${2} | ${42}  | ${42}    | ${0}
    ${3} | ${48}  | ${72}    | ${-1}
    ${4} | ${1}   | ${5}     | ${-1}
  `('Base test: $n', ({ num, m, result }) => {
    expect(getCountOfOperations(num, m)).toBe(result);
  });
});
