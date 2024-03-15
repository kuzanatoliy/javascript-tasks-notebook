const { getRoundedPrice } = require('./A');

describe('1702A. Round Down the Price', () => {
  it.each`
    n    | distances    | result
    ${1} | ${1}         | ${0}
    ${2} | ${2}         | ${1}
    ${3} | ${178}       | ${78}
    ${4} | ${20}        | ${10}
    ${5} | ${999999999} | ${899999999}
    ${6} | ${9000}      | ${8000}
    ${7} | ${987654321} | ${887654321}
  `('Base test: $n', ({ distances, result }) => {
    expect(getRoundedPrice(distances)).toBe(result);
  });
});
