const { checkPermution } = require('./A');

describe('136A. Presentss', () => {
  it.each`
    n    | string1          | string2              | permution                        | result
    ${1} | ${'SANTACLAUS'}  | ${'DEDMOROZ'}        | ${'SANTAMOROZDEDCLAUS'}          | ${'YES'}
    ${2} | ${'PAPAINOEL'}   | ${'JOULUPUKKI'}      | ${'JOULNAPAOILELUPUKKI'}         | ${'NO'}
    ${3} | ${'BABBONATALE'} | ${'FATHERCHRISTMAS'} | ${'BABCHRISTMASBONATALLEFATHER'} | ${'NO'}
  `('Base test: $n', ({ string1, string2, permution, result }) => {
    expect(checkPermution(string1, string2, permution)).toStrictEqual(result);
  });
});
