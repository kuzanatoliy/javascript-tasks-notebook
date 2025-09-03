const { transformString } = require('./A');

describe('2125B. Left and Down', () => {
  it.each`
    n    | str                  | result
    ${1} | ${'FFT'}             | ${'TFF'}
    ${2} | ${'ABFBANTTA'}       | ${'TTNFBBAAA'}
    ${3} | ${'FFTNTT'}          | ${'TTTNFF'}
    ${4} | ${'FFTFFTFFTNNTNNT'} | ${'TTTTTNNNNFFFFFF'}
    ${5} | ${'AFFTBFFNTTFTTZ'}  | ${'ZTTTTTNFFFFFBA'}
  `('Base test: $n', ({ str, result }) => {
    expect(transformString(str)).toBe(result);
  });
});
