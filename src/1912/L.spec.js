const { getPosition } = require('./L');

describe('1912L. LOL Lovers', () => {
  it.each`
    n    | map             | result
    ${1} | ${'LOL'}        | ${-1}
    ${2} | ${'LO'}         | ${1}
    ${3} | ${'LLLO'}       | ${1}
    ${4} | ${'OLOL'}       | ${-1}
    ${5} | ${'LLOOOOLLLO'} | ${1}
    ${6} | ${'LLOO'}       | ${2}
  `('Base test: $n', ({ map, result }) => {
    expect(getPosition(map)).toBe(result);
  });
});
