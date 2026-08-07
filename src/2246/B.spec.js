const { buildArray } = require('./B');

describe('2246B. ezraft and Array', () => {
  it.each`
    n    | num  | result
    ${1} | ${1} | ${[1]}
    ${2} | ${2} | ${[-1]}
    ${3} | ${4} | ${[1, 2, 3, 6]}
    ${4} | ${5} | ${[1, 2, 3, 6, 12]}
  `('Base test: $n', ({ num, result }) => {
    expect(buildArray(num)).toStrictEqual(result);
  });
});
