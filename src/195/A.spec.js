const { getWaitDelay } = require('./A');

describe("195A. Let's Watch Football", () => {
  it.each`
    n    | a     | b     | c    | result
    ${1} | ${4}  | ${1}  | ${1} | ${3}
    ${2} | ${10} | ${3}  | ${2} | ${5}
    ${3} | ${13} | ${12} | ${1} | ${1}
  `('Base test: $n', ({ a, b, c, result }) => {
    expect(getWaitDelay(a, b, c)).toBe(result);
  });
});
