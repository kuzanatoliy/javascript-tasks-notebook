const { isItPossibleToRearrangeElements } = require('./D');

describe('1798D. Shocking Arrangement', () => {
  it.each`
    n    | pelements                          | result
    ${1} | ${[3, 4, -2, -5]}                  | ${['Yes', [-5, 4, 3, -2]]}
    ${2} | ${[2, 2, 2, -3, -3]}               | ${['Yes', [-3, 2, 2, -3, 2]]}
    ${3} | ${[-3, -3, 1, 1, 1, 1, 1, 1]}      | ${['Yes', [-3, 1, 1, 1, -3, 1, 1, 1]]}
    ${4} | ${[0, 1, -1]}                      | ${['Yes', [-1, 1, 0]]}
    ${5} | ${[-3, 4, 3, 4, -4, -4, 0]}        | ${['Yes', [-4, 4, -4, 4, -3, 3, 0]]}
    ${6} | ${[0]}                             | ${['No']}
    ${7} | ${[-18, 13, -18, -17, 12, 15, 13]} | ${['Yes', [-18, 15, 13, -18, 13, -17, 12]]}
  `('Base test: $n', ({ pelements, result }) => {
    expect(isItPossibleToRearrangeElements(pelements)).toStrictEqual(result);
  });
});
