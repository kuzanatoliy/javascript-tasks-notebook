const { getResultString } = require('./B');

describe('1907B. YetnotherrokenKeoard', () => {
  it.each`
    n     | data                                    | result
    ${1}  | ${'ARaBbbitBaby'}                       | ${'ity'}
    ${2}  | ${'YetAnotherBrokenKeyboard'}           | ${'YetnotherrokenKeoard'}
    ${3}  | ${'Bubble'}                             | ${'le'}
    ${4}  | ${'Improbable'}                         | ${'Imprle'}
    ${5}  | ${'abbreviable'}                        | ${'revile'}
    ${6}  | ${'BbBB'}                               | ${''}
    ${7}  | ${'BusyasaBeeinaBedofBloomingBlossoms'} | ${'usyasaeeinaedofloominglossoms'}
    ${8}  | ${'CoDEBARbIES'}                        | ${'CDARIES'}
    ${9}  | ${'codeforces'}                         | ${'codeforces'}
    ${10} | ${'bobebobbes'}                         | ${'es'}
    ${11} | ${'b'}                                  | ${''}
    ${12} | ${'TheBBlackbboard'}                    | ${'helaoard'}
  `('Base test: $n', ({ data, result }) => {
    expect(getResultString(data)).toBe(result);
  });
});
