/* eslint-disable no-loop-func */
module.exports = {
  promiseAny: (props) =>
    new Promise((resolve, reject) => {
      let count = 0;
      const rejects = new Array(props.length);
      for (let j = 0; j < rejects.length; j++) {
        Promise.resolve(props[j]).then(
          (res) => {
            resolve(res);
          },
          (error) => {
            rejects[j] = error;
            count++;
            if (count === rejects.length) {
              reject(rejects);
            }
          }
        );
      }
    }),
};
