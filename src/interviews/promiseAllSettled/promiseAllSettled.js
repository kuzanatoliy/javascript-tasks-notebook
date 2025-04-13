/* eslint-disable no-loop-func */
module.exports = {
  promiseAllSettled: (props) =>
    new Promise((resolve) => {
      let count = 0;
      const results = new Array(props.length);
      for (let j = 0; j < results.length; j++) {
        Promise.resolve(props[j]).then(
          (res) => {
            results[j] = { status: 'fulfilled', value: res };
            count++;
            if (count === props.length) {
              resolve(results);
            }
          },
          (error) => {
            results[j] = { reason: error.message, status: 'rejected' };
            count++;
            if (count === props.length) {
              resolve(results);
            }
          }
        );
      }
    }),
};
