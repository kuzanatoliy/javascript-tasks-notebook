/* eslint-disable no-loop-func */
module.exports = {
  promiseAll: (props) =>
    new Promise((resolve, reject) => {
      let count = 0;
      const results = new Array(props.length);
      for (let j = 0; j < results.length; j++) {
        Promise.resolve(props[j]).then(
          (res) => {
            results[j] = res;
            count++;
            if (count === props.length) {
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
