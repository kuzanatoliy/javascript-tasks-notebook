const { getMinRange } = require('./A');

describe('2256A. Three Numbers on the Blackboard', () => {
  it.each`
    n    | a     | b    | c     | result
    ${1} | ${5}  | ${5} | ${5}  | ${0}
    ${2} | ${4}  | ${6} | ${9}  | ${5}
    ${3} | ${2}  | ${3} | ${10} | ${3}
    ${4} | ${0}  | ${0} | ${7}  | ${0}
    ${5} | ${2}  | ${3} | ${5}  | ${3}
    ${6} | ${20} | ${4} | ${5}  | ${5}
  `('Base test: $n', ({ a, b, c, result }) => {
    expect(getMinRange(a, b, c)).toBe(result);
  });
});
