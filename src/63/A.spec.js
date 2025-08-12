const { getOrder } = require('./A');

describe('63A. Sinking Ship', () => {
  it.each`
    n    | people                                                                                                                                                                                                          | result
    ${1} | ${[['Jack', 'captain'], ['Alice', 'woman'], ['Charlie', 'man'], ['Taddy', 'rat'], ['Bob', 'child'], ['Julia', 'woman']]}                                                                                        | ${['Taddy', 'Alice', 'Bob', 'Julia', 'Charlie', 'Jack']}
    ${1} | ${[['Jue', 'rat'], ['Wyglbyphk', 'rat'], ['Gjlgu', 'child'], ['Gi', 'man'], ['Attx', 'rat'], ['Theorpkgx', 'man'], ['Ym', 'rat'], ['X', 'child'], ['B', 'captain'], ['Enualf', 'rat'], ['Kktsgyuyv', 'woman']]} | ${['Jue', 'Wyglbyphk', 'Attx', 'Ym', 'Enualf', 'Gjlgu', 'X', 'Kktsgyuyv', 'Gi', 'Theorpkgx', 'B']}
  `('Base test: $n', ({ people, result }) => {
    expect(getOrder(people)).toStrictEqual(result);
  });
});
