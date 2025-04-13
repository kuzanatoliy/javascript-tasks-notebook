/* eslint-disable no-loop-func */
module.exports = {
  promiseAll: (...args) =>
    new Promise((resolve, reject) => {
      let count = 0;
      const results = new Array(args.length);
      for (let j = 0; j < results.length; j++) {
        Promise.resolve(args[j]).then(
          (res) => {
            results[j] = res;
            count++;
            if (count === args.length) {
              resolve(results);
            }
          },
          (error) => {
            reject(error);
          }
        );
      }
    }),
};
