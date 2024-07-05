const { getNumberOfPoints } = require('./C');

describe('1722C. Word Game', () => {
  it.each`
    n    | matrix                                                                                                             | result
    ${1} | ${[['abc'], ['def'], ['abc']]}                                                                                     | ${[1, 3, 1]}
    ${2} | ${[['orz', 'for', 'qaq'], ['qaq', 'orz', 'for'], ['cod', 'for', 'ces']]}                                           | ${[2, 2, 6]}
    ${3} | ${[['iat', 'roc', 'hem', 'ica', 'lly'], ['bac', 'ter', 'iol', 'ogi', 'sts'], ['bac', 'roc', 'lly', 'iol', 'iat']]} | ${[9, 11, 5]}
  `('Base test: $n', ({ matrix, result }) => {
    expect(getNumberOfPoints(matrix)).toStrictEqual(result);
  });
});
