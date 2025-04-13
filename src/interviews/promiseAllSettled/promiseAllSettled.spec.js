const { promiseAllSettled } = require('./promiseAllSettled');

describe('promiseAllSettled', () => {
  it('Should get result array', async () => {
    const p1 = Promise.resolve(3);
    const p2 = Promise.reject(new Error('promise reject'));
    const p3 = 1337;
    const p4 = 2667;
    const p5 = new Promise((resolve) => {
      setTimeout(() => {
        resolve('test');
      }, 100);
    });
    const p6 = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error('promise reject'));
      }, 100);
    });
    await expect(
      promiseAllSettled([p1, p2, p3, p4, p5, p6])
    ).resolves.toStrictEqual([
      { status: 'fulfilled', value: 3 },
      {
        reason: 'promise reject',
        status: 'rejected',
      },
      { status: 'fulfilled', value: 1337 },
      { status: 'fulfilled', value: 2667 },
      {
        status: 'fulfilled',
        value: 'test',
      },
      {
        reason: 'promise reject',
        status: 'rejected',
      },
    ]);
  });
});
