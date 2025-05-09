const { getCountOfFaces } = require('./B');

describe('2072B. Having Been a Treasurer in the Past, I Help Goblins Deceive', () => {
  it.each`
    n    | map             | result
    ${1} | ${'--_'}        | ${1}
    ${2} | ${'__-__'}      | ${0}
    ${3} | ${'--__-_---'}  | ${27}
    ${4} | ${'_--_'}       | ${2}
    ${5} | ${'_-_-_-_-_-'} | ${30}
    ${6} | ${'_------'}    | ${9}
    ${7} | ${'-'}          | ${0}
    ${8} | ${'_-'}         | ${0}
  `('Base test: $n', ({ map, result }) => {
    expect(getCountOfFaces(map)).toBe(result);
  });
});
