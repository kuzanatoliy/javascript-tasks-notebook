const { getSizeOfArea } = require('./A');

describe('1315A. Dead Pixel', () => {
  it.each`
    n    | a     | b     | x     | y    | result
    ${1} | ${8}  | ${8}  | ${0}  | ${0} | ${56}
    ${2} | ${1}  | ${10} | ${0}  | ${3} | ${6}
    ${3} | ${17} | ${31} | ${10} | ${4} | ${442}
    ${4} | ${2}  | ${1}  | ${0}  | ${0} | ${1}
    ${5} | ${5}  | ${10} | ${3}  | ${9} | ${45}
    ${6} | ${10} | ${10} | ${4}  | ${8} | ${80}
  `('Base test: $n', ({ a, b, x, y, result }) => {
    expect(getSizeOfArea(a, b, x, y)).toBe(result);
  });
});
