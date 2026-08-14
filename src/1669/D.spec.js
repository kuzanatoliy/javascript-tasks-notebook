const { isItPossibleToTransform } = require('./D');

describe('1669D. Colorful Stamp', () => {
  it.each`
    n     | map               | result
    ${1}  | ${'BRBBW'}        | ${'YES'}
    ${2}  | ${'B'}            | ${'NO'}
    ${3}  | ${'WB'}           | ${'NO'}
    ${4}  | ${'RW'}           | ${'NO'}
    ${5}  | ${'BRB'}          | ${'YES'}
    ${6}  | ${'RBB'}          | ${'YES'}
    ${7}  | ${'WWWWWWW'}      | ${'YES'}
    ${8}  | ${'RBWBWRRBW'}    | ${'NO'}
    ${9}  | ${'BRBRBRBRRB'}   | ${'YES'}
    ${10} | ${'BBBRWWRRRWBR'} | ${'NO'}
    ${11} | ${'BRBRBRBRBW'}   | ${'YES'}
    ${12} | ${'RBWBW'}        | ${'NO'}
  `('Base test: $n', ({ map, result }) => {
    expect(isItPossibleToTransform(map)).toBe(result);
  });
});
