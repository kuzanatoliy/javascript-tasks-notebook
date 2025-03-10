const { getXY } = require('./A');

describe('1584A. Mathematical Addition', () => {
  it.each`
    n    | u    | v    | result
    ${1} | ${1} | ${1} | ${[-1, 1]}
    ${2} | ${2} | ${3} | ${[-4, 9]}
    ${3} | ${3} | ${5} | ${[-9, 25]}
    ${4} | ${6} | ${9} | ${[-36, 81]}
  `('Base test: $n', ({ u, v, result }) => {
    expect(getXY(u, v)).toStrictEqual(result);
  });
});
