const { getCountOfRemovedSymbols } = require('./C');

describe('1941C. Rudolf and the Ugly String', () => {
  it.each`
    n    | str                     | result
    ${1} | ${'mmapnapie'}          | ${2}
    ${2} | ${'azabazapi'}          | ${0}
    ${3} | ${'mappppie'}           | ${2}
    ${4} | ${'mapmapmapmapmapmap'} | ${6}
    ${5} | ${'p'}                  | ${0}
    ${6} | ${'pppiepieeee'}        | ${2}
  `('Base test: $n', ({ str, result }) => {
    expect(getCountOfRemovedSymbols(str)).toBe(result);
  });
});
