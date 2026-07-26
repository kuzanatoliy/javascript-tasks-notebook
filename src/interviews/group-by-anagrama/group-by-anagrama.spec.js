const { groupByAnagrama } = require('./group-by-anagrama');

describe('groupByAnagrama', () => {
  it.each`
    n    | arr                                 | result
    ${1} | ${['bro', 'obr', 'bugag', 'gguba']} | ${[['bro', 'obr'], ['bugag', 'gguba']]}
  `('Base test: $n', ({ arr, result }) => {
    expect(groupByAnagrama(arr)).toStrictEqual(result);
  });
});
