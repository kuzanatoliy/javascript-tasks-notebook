const { isSubstrExisted } = require('./A');

describe('1496A. Split it!', () => {
  it.each`
    n    | str                         | k    | result
    ${1} | ${'qwqwq'}                  | ${1} | ${'YES'}
    ${2} | ${'ab'}                     | ${1} | ${'NO'}
    ${3} | ${'ioi'}                    | ${1} | ${'YES'}
    ${4} | ${'icpc'}                   | ${2} | ${'NO'}
    ${5} | ${'dokidokiliteratureclub'} | ${0} | ${'YES'}
    ${6} | ${'imteamshanghaialice'}    | ${8} | ${'NO'}
    ${7} | ${'aaaaaa'}                 | ${3} | ${'NO'}
  `('Base test: $n', ({ str, k, result }) => {
    expect(isSubstrExisted(str, k)).toBe(result);
  });
});
