const { isItPossibleDivideToSubsegments } = require('./B');

describe('1196B. Odd Sum Segments', () => {
  it.each`
    n    | segmentsCount | numbers                | result
    ${1} | ${3}          | ${[7, 18, 3, 14, 1]}   | ${['YES', [1, 3, 5]]}
    ${2} | ${4}          | ${[1, 2, 3, 4, 5]}     | ${['NO']}
    ${3} | ${2}          | ${[1, 2, 8, 4, 10, 2]} | ${['NO']}
  `('Base test: $n', ({ segmentsCount, numbers, result }) => {
    expect(
      isItPossibleDivideToSubsegments(segmentsCount, numbers)
    ).toStrictEqual(result);
  });
});
