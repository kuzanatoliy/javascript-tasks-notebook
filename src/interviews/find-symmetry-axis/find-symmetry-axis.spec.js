const { findSymmetryAxis } = require('./find-symmetry-axis');

describe('findSymmetryAxis', () => {
  it.each`
    n    | points                                                              | result
    ${1} | ${[{ x: 1, y: 2 }, { x: 5, y: 2 }]}                                 | ${3}
    ${2} | ${[{ x: 1, y: 2 }, { x: 1, y: 5 }, { x: 5, y: 2 }]}                 | ${null}
    ${3} | ${[{ x: 1, y: 2 }, { x: 1, y: 5 }, { x: 1, y: 7 }, { x: 5, y: 2 }]} | ${null}
    ${4} | ${[{ x: 1, y: 2 }, { x: 2, y: 5 }, { x: 5, y: 2 }]}                 | ${null}
  `('Base test: $n', ({ points, target, result }) => {
    expect(findSymmetryAxis(points, target)).toStrictEqual(result);
  });
});
