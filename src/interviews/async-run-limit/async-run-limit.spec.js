const { asyncRunLimit } = require('./async-run-limit');

describe('asyncRunLimit', () => {
  it('Should run asyncRunLImit function success', async () => {
    try {
      const fn = async (n) => {
        await new Promise((res) => {
          setTimeout(res, 100);
        });
        return n * n;
      };
      expect(await asyncRunLimit(fn, 150)(5)).toBe(25);
    } catch {
      throw new Error('Should be success');
    }
  });

  it('Should run asyncRunLImit function success', async () => {
    try {
      const fn = async (n) => {
        await new Promise((res) => {
          setTimeout(res, 200);
        });
        return n * n;
      };
      await asyncRunLimit(fn, 150)(5);
      throw new Error('Should be faild');
    } catch (error) {
      expect(error.message === 'Time limit');
    }
  });
});
