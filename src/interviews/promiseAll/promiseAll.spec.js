const { promiseAll } = require('./promiseAll');

describe('promiseAll', () => {
  it('Should get result array', async () => {
    const p1 = Promise.resolve(3);
    const p2 = 1337;
    const p3 = new Promise((resolve) => {
      setTimeout(() => {
        resolve('test');
      }, 100);
    });
    const result = await promiseAll([p1, p2, p3]);
    expect(result).toStrictEqual([3, 1337, 'test']);
  });

  it('Should get error', async () => {
    const p1 = Promise.resolve(3);
    const p2 = 1337;
    const p3 = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error('test error'));
      }, 100);
    });
    try {
      await promiseAll([p1, p2, p3]);
    } catch (error) {
      expect(error.message).toStrictEqual('test error');
    }
  });
});
