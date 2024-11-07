const { getCountOfOperations } = require('./A');

describe("2007A. Dora's Set", () => {
  it.each`
    n    | a     | b       | result
    ${1} | ${1}  | ${3}    | ${1}
    ${2} | ${3}  | ${7}    | ${1}
    ${3} | ${10} | ${21}   | ${3}
    ${4} | ${2}  | ${8}    | ${1}
    ${5} | ${51} | ${60}   | ${2}
    ${6} | ${2}  | ${15}   | ${3}
    ${7} | ${10} | ${26}   | ${4}
    ${8} | ${1}  | ${1000} | ${250}
  `('Base test: $n', ({ a, b, result }) => {
    expect(getCountOfOperations(a, b)).toBe(result);
  });
});
