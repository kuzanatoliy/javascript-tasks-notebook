const { getGoodNumCount } = require('./A');

describe('365A. Good Number', () => {
  it.each`
    n    | arr                                                                                           | k    | result
    ${1} | ${[1234560, 1234560, 1234560, 1234560, 1234560, 1234560, 1234560, 1234560, 1234560, 1234560]} | ${6} | ${10}
    ${2} | ${[1, 10]}                                                                                    | ${1} | ${1}
  `('Base test: $n', ({ arr, k, result }) => {
    expect(getGoodNumCount(arr, k)).toStrictEqual(result);
  });
});
