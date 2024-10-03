const { transformNumber } = require('./A');

describe('1861A. Prime Deletion', () => {
  it.each`
    n    | num          | result
    ${1} | ${123456789} | ${13}
    ${2} | ${987654321} | ${97}
    ${3} | ${243567918} | ${23}
    ${4} | ${576318429} | ${53}
  `('Base test: $n', ({ num, result }) => {
    expect(transformNumber(num)).toBe(result);
  });
});
