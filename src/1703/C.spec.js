const { getState } = require('./C');

describe('1703C. Cypher', () => {
  it.each`
    n    | array              | moves                                                      | result
    ${1} | ${[9, 3, 1]}       | ${['DDD', 'UDUU', 'DU']}                                   | ${[2, 1, 1]}
    ${2} | ${[0, 9]}          | ${['DDDDDDDDD', 'UUUUUUUUU']}                              | ${[9, 0]}
    ${3} | ${[0, 5, 9, 8, 3]} | ${['UUUUUUUUUU', 'UUD', 'UUDUUDDD', 'UUDUUDUDDU', 'UUUU']} | ${[0, 4, 9, 6, 9]}
  `('Base test: $n', ({ array, moves, result }) => {
    expect(getState(array, moves)).toStrictEqual(result);
  });
});
