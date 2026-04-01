const { isItPossibleToPass } = require('./A');

describe('2202A. Parkour Design', () => {
  it.each`
    n     | x     | y     | result
    ${1}  | ${2}  | ${1}  | ${'YES'}
    ${2}  | ${3}  | ${0}  | ${'YES'}
    ${3}  | ${4}  | ${-1} | ${'YES'}
    ${4}  | ${4}  | ${1}  | ${'NO'}
    ${5}  | ${14} | ${1}  | ${'YES'}
    ${6}  | ${1}  | ${-4} | ${'NO'}
    ${7}  | ${3}  | ${-1} | ${'NO'}
    ${8}  | ${2}  | ${10} | ${'NO'}
    ${9}  | ${24} | ${-1} | ${'NO'}
    ${10} | ${24} | ${-3} | ${'YES'}
    ${11} | ${8}  | ${4}  | ${'YES'}
  `('Base test: $n', ({ x, y, result }) => {
    expect(isItPossibleToPass(x, y)).toBe(result);
  });
});
