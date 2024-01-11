const { getCountOfGoodSubarrays } = require('./C');

describe('1398C. Good Subarrays', () => {
  it.each`
    n    | number    | result
    ${1} | ${120}    | ${3}
    ${2} | ${11011}  | ${6}
    ${3} | ${600005} | ${1}
  `('Base test: $n', ({ number, result }) => {
    expect(getCountOfGoodSubarrays(number)).toBe(result);
  });
});
