const { getSkipedDocuments } = require('./B');

describe('2275B. Did Not Go to Print', () => {
  it.each`
    n    | map         | result
    ${1} | ${'12'}     | ${[2]}
    ${2} | ${'13'}     | ${[1]}
    ${3} | ${'23'}     | ${[]}
    ${4} | ${'112332'} | ${[3, 6]}
    ${5} | ${'112'}    | ${[1, 3]}
    ${6} | ${'211213'} | ${[2, 4, 5]}
  `('Base test: $n', ({ map, result }) => {
    expect(getSkipedDocuments(map)).toStrictEqual(result);
  });
});
