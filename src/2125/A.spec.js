const { transformString } = require('./A');

describe('2125B. Left and Down', () => {
  it.each`
    n    | str                  | result
    ${1} | ${'FFT'}             | ${'FFT'}
    ${2} | ${'ABFBANTTA'}       | ${'AAABBFNTT'}
    ${3} | ${'FFTNTT'}          | ${'FFNTTT'}
    ${4} | ${'FFTFFTFFTNNTNNT'} | ${'FFFFFFNNNNTTTTT'}
    ${5} | ${'AFFTBFFNTTFTTZ'}  | ${'ABFFFFFNTTTTTZ'}
  `('Base test: $n', ({ str, result }) => {
    expect(transformString(str)).toBe(result);
  });
});
