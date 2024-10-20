const { getPosition } = require('./A');

describe('1779A. Hall of Fame', () => {
  it.each`
    n    | map           | result
    ${1} | ${'LL'}       | ${-1}
    ${2} | ${'LR'}       | ${1}
    ${3} | ${'RL'}       | ${0}
    ${4} | ${'RR'}       | ${-1}
    ${5} | ${'LLRLLLLR'} | ${0}
    ${6} | ${'RRLRRRL'}  | ${0}
  `('Base test: $n', ({ map, result }) => {
    expect(getPosition(map)).toBe(result);
  });
});
