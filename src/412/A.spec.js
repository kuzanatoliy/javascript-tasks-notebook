const { getActions } = require('./A');

describe('412B. Network Configuration', () => {
  it.each`
    n    | map         | k    | result
    ${1} | ${'R1'}     | ${2} | ${['PRINT 1', 'LEFT', 'PRINT R']}
    ${2} | ${'R1'}     | ${1} | ${['PRINT R', 'RIGHT', 'PRINT 1']}
    ${3} | ${'GO?GO!'} | ${4} | ${['RIGHT', 'RIGHT', 'PRINT !', 'LEFT', 'PRINT O', 'LEFT', 'PRINT G', 'LEFT', 'PRINT ?', 'LEFT', 'PRINT O', 'LEFT', 'PRINT G']}
  `('Base test: $n', ({ map, k, result }) => {
    expect(getActions(map, k)).toStrictEqual(result);
  });
});
