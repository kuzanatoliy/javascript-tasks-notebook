const { getCountOfLayers } = require('./B');

describe('2184A. New Year aing', () => {
  it.each`
    n    | a          | b          | result
    ${1} | ${1}       | ${1}       | ${1}
    ${2} | ${1}       | ${2}       | ${2}
    ${3} | ${3}       | ${1}       | ${2}
    ${4} | ${4}       | ${3}       | ${2}
    ${5} | ${5}       | ${2}       | ${3}
    ${6} | ${1000000} | ${1000000} | ${20}
    ${7} | ${1000000} | ${1}       | ${2}
  `('Base test: $n', ({ a, b, result }) => {
    expect(getCountOfLayers(a, b)).toBe(result);
  });
});
