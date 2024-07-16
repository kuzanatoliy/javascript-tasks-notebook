const { getTheBestMovie } = require('./C');

describe('670B. Game of Robots', () => {
  it.each`
    n    | people                | movies             | subtitles          | result
    ${1} | ${[2, 3, 2]}          | ${[3, 2]}          | ${[2, 3]}          | ${2}
    ${2} | ${[6, 3, 1, 1, 3, 7]} | ${[1, 2, 3, 4, 5]} | ${[2, 3, 4, 5, 1]} | ${1}
    ${3} | ${[1, 2]}             | ${[3, 3]}          | ${[4, 1]}          | ${2}
  `('Base test: $n', ({ people, movies, subtitles, result }) => {
    expect(getTheBestMovie(people, movies, subtitles)).toStrictEqual(result);
  });
});
