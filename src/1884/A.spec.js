const { getButyNum } = require('./A');

describe('1884A. Simple Design', () => {
  it.each`
    n    | num     | k     | result
    ${1} | ${1}    | ${5}  | ${5}
    ${2} | ${10}   | ${8}  | ${17}
    ${3} | ${37}   | ${9}  | ${45}
    ${4} | ${777}  | ${3}  | ${777}
    ${5} | ${1235} | ${10} | ${1243}
    ${6} | ${1}    | ${10} | ${19}
  `('Base test: $n', ({ num, k, result }) => {
    expect(getButyNum(num, k)).toBe(result);
  });
});
