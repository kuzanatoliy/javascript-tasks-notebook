const { getWinWariants } = require('./A');

describe('400A. Inna and Choose Options', () => {
  it.each`
    n    | map               | result
    ${1} | ${'OXXXOXOOXOOX'} | ${['1x12', '2x6', '4x3']}
    ${2} | ${'OXOXOXOXOXOX'} | ${['1x12', '2x6', '3x4', '6x2']}
    ${3} | ${'XXXXXXXXXXXX'} | ${['1x12', '2x6', '3x4', '4x3', '6x2', '12x1']}
    ${4} | ${'OOOOOOOOOOOO'} | ${[]}
  `('Base test: $n', ({ map, result }) => {
    expect(getWinWariants(map)).toStrictEqual(result);
  });
});
