const { getCountOfOperations } = require('./A');

describe('137A. Postcards and photos', () => {
  it.each`
    n    | map                      | result
    ${1} | ${'CPCPCPC'}             | ${7}
    ${2} | ${'CCCCCCPPPPPP'}        | ${4}
    ${3} | ${'CCCCCCPPCPPPPPPPPPP'} | ${6}
    ${4} | ${'CCCCCCCCCC'}          | ${2}
  `('Base test: $n', ({ map, result }) => {
    expect(getCountOfOperations(map)).toStrictEqual(result);
  });
});
