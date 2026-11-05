const { isItPossibleToBuild } = require('./B');

describe("2155B. Abraham's Great Escape", () => {
  it.each`
    n    | num  | k    | result
    ${1} | ${2} | ${4} | ${['YES', [['U', 'U'], ['U', 'U']]]}
    ${2} | ${3} | ${5} | ${['YES', [['U', 'U', 'U'], ['U', 'U', 'D'], ['R', 'R', 'L']]]}
    ${3} | ${2} | ${3} | ${['NO']}
  `('Base test: $n', ({ num, k, result }) => {
    expect(isItPossibleToBuild(num, k)).toStrictEqual(result);
  });
});
