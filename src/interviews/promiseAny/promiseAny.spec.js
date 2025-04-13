const { promiseAny } = require('./promiseAny');

describe('promiseAny', () => {
  it('Should get result', async () => {
    const p1 = Promise.resolve(3);
    const p2 = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error('test error'));
      }, 100);
    });
    await expect(promiseAny([p1, p2])).resolves.toBe(3);
  });

  it('Should get errors', async () => {
    const p1 = Promise.reject(new Error('first error'));
    const p2 = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error('second error'));
      }, 100);
    });
    await expect(promiseAny([p1, p2])).rejects.toStrictEqual(
      expect.arrayContaining([
        expect.objectContaining({ message: 'first error' }),
        expect.objectContaining({ message: 'second error' }),
      ])
    );
  });
});
