const { getCiclesCount } = require('./B');

describe('2070B. Robot Program', () => {
  it.each`
    n    | x      | k                    | map        | result
    ${1} | ${2n}  | ${6n}                | ${'LLR'}   | ${1n}
    ${2} | ${-1n} | ${8n}                | ${'RL'}    | ${4n}
    ${3} | ${-2n} | ${5n}                | ${'LRRR'}  | ${1n}
    ${4} | ${3n}  | ${7n}                | ${'LRRLL'} | ${0n}
    ${5} | ${1n}  | ${1n}                | ${'L'}     | ${1n}
    ${6} | ${-1n} | ${4846549234412827n} | ${'RLR'}   | ${2423274617206414n}
  `('Base test: $n', ({ x, k, map, result }) => {
    expect(getCiclesCount(x, k, map)).toBe(result);
  });
});
