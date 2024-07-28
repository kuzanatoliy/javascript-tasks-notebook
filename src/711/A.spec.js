const { isItPossibleToFindPlace } = require('./A');

describe('711A. Bus to Udayland', () => {
  it.each`
    n    | rows                                                      | result
    ${1} | ${['OO|OX', 'XO|XX', 'OX|OO', 'XX|OX', 'OO|OO', 'OO|XX']} | ${['YES', ['++|OX', 'XO|XX', 'OX|OO', 'XX|OX', 'OO|OO', 'OO|XX']]}
    ${2} | ${['XO|OX', 'XO|XX', 'OX|OX', 'XX|OX']}                   | ${['NO']}
    ${3} | ${['XX|XX', 'XX|XX', 'XO|OX', 'XO|OO', 'OX|XO']}          | ${['YES', ['XX|XX', 'XX|XX', 'XO|OX', 'XO|++', 'OX|XO']]}
  `('Base test: $n', ({ rows, result }) => {
    expect(isItPossibleToFindPlace(rows)).toStrictEqual(result);
  });
});
