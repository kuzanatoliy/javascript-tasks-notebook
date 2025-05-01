const { getLine } = require('./B');

describe('2094B. Bobritto Bandito', () => {
  it.each`
    n    | num  | m    | l     | r    | result
    ${1} | ${4} | ${2} | ${-2} | ${2} | ${[-0, 2]}
    ${2} | ${4} | ${1} | ${0}  | ${4} | ${[-0, 1]}
    ${3} | ${3} | ${3} | ${-1} | ${2} | ${[-1, 2]}
    ${4} | ${9} | ${8} | ${-6} | ${3} | ${[-5, 3]}
  `('Base test: $n', ({ num, m, l, r, result }) => {
    expect(getLine(num, m, l, r)).toStrictEqual(result);
  });
});
