module.exports = {
  asyncRunLimit:
    (callback, delay) =>
    (...args) =>
      new Promise((resolve, reject) => {
        const timerId = setTimeout(() => {
          reject(new Error('Time limit'));
        }, delay);
        Promise.resolve(callback(...args)).then((value) => {
          clearTimeout(timerId);
          resolve(value);
        });
      }),
};
