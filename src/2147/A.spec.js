const { getCountOfSteps } = require('./A');

describe('2147A. Shortest Increasing Path', () => {
  it.each`
    n     | x        | y        | result
    ${1}  | ${1}     | ${2}     | ${2}
    ${2}  | ${5}     | ${6}     | ${2}
    ${3}  | ${4}     | ${2}     | ${3}
    ${4}  | ${1}     | ${1}     | ${-1}
    ${5}  | ${2}     | ${1}     | ${-1}
    ${6}  | ${3}     | ${3}     | ${-1}
    ${7}  | ${5}     | ${1}     | ${-1}
    ${8}  | ${5}     | ${4}     | ${-1}
    ${9}  | ${752}   | ${18572} | ${2}
    ${10} | ${95152} | ${2322}  | ${3}
  `('Base test: $n', ({ x, y, result }) => {
    expect(getCountOfSteps(x, y)).toBe(result);
  });
});
