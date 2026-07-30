const { getMaxValues } = require('./D');

describe('1722D. Line', () => {
  it.each`
    n    | map               | result
    ${1} | ${'LLR'}          | ${[3, 5, 5]}
    ${2} | ${'LRRLL'}        | ${[16, 16, 16, 16, 16]}
    ${3} | ${'L'}            | ${[0]}
    ${4} | ${'LRRRLLLRLLRL'} | ${[86, 95, 98, 101, 102, 102, 102, 102, 102, 102, 102, 102]}
    ${5} | ${'LLLLLRRRRR'}   | ${[29, 38, 45, 52, 57, 62, 65, 68, 69, 70]}
    ${6} | ${'LRLRLRLRL'}    | ${[44, 50, 54, 56, 56, 56, 56, 56, 56]}
  `('Base test: $n', ({ map, result }) => {
    expect(getMaxValues(map)).toStrictEqual(result);
  });
});
