const { getCountOfSubscriptions } = require('./B1');

describe('1225B1. TV Subscriptions (Easy Version)', () => {
  it.each`
    n    | k     | d    | arr                                                 | result
    ${1} | ${2}  | ${2} | ${[1, 2, 1, 2, 1]}                                  | ${2}
    ${2} | ${3}  | ${3} | ${[3, 3, 3, 2, 2, 2, 1, 1, 1]}                      | ${1}
    ${3} | ${10} | ${4} | ${[10, 8, 6, 4]}                                    | ${4}
    ${4} | ${9}  | ${8} | ${[3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7, 9, 3]} | ${5}
  `('Base test: $n', ({ k, d, arr, result }) => {
    expect(getCountOfSubscriptions(k, d, arr)).toStrictEqual(result);
  });
});
