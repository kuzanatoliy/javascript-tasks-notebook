const { getPair } = require('./B');

describe('1788B. Sum of Two Numbers', () => {
  it.each`
    n    | num     | result
    ${1} | ${1}    | ${[0, 1]}
    ${2} | ${161}  | ${[130, 31]}
    ${3} | ${67}   | ${[60, 7]}
    ${4} | ${1206} | ${[1201, 5]}
    ${5} | ${19}   | ${[14, 5]}
  `('Base test: $n', ({ num, result }) => {
    expect(getPair(num)).toStrictEqual(result);
  });
});
