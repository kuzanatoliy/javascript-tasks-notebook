const { isItPossibleToTransform } = require('./A');

describe('259A. Little Elephant and Chess', () => {
  it.each`
    n    | board                                                                                               | result
    ${1} | ${['WBWBWBWB', 'BWBWBWBW', 'BWBWBWBW', 'BWBWBWBW', 'WBWBWBWB', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB']} | ${'YES'}
    ${2} | ${['WBWBWBWB', 'WBWBWBWB', 'BBWBWWWB', 'BWBWBWBW', 'BWBWBWBW', 'BWBWBWWW', 'BWBWBWBW', 'BWBWBWBW']} | ${'NO'}
  `('Base test: $n', ({ board, result }) => {
    expect(isItPossibleToTransform(board)).toBe(result);
  });
});
