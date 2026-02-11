/* eslint-disable complexity */
module.exports = {
  canNumberBeExpressed: (num, k) => {
    const pros = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31];
    for (let i = 32; i <= num; i++) {
      if (
        i % 2 !== 0 &&
        i % 3 !== 0 &&
        i % 5 !== 0 &&
        i % 7 !== 0 &&
        i % 11 !== 0 &&
        i % 13 !== 0 &&
        i % 17 !== 0 &&
        i % 19 !== 0 &&
        i % 23 !== 0 &&
        i % 29 !== 0 &&
        i % 31 !== 0
      ) {
        pros.push(i);
      }
    }

    const prossum = [13, 19, 31];
    for (let ii = 6; ii < pros.length - 1; ii++) {
      const sum = pros[ii] + pros[ii + 1] + 1;
      if (
        sum % 2 !== 0 &&
        sum % 3 !== 0 &&
        sum % 5 !== 0 &&
        sum % 7 !== 0 &&
        sum % 11 !== 0 &&
        sum % 13 !== 0 &&
        sum % 17 !== 0 &&
        sum % 19 !== 0 &&
        sum % 23 !== 0 &&
        sum % 29 !== 0 &&
        sum % 31 !== 0 &&
        sum <= num
      ) {
        prossum.push(sum);
      }
    }

    let count = 0;
    for (let iii = 0; iii < prossum.length; iii++) {
      if (prossum[iii] <= num) {
        count++;
      }
    }

    return count >= k ? 'YES' : 'NO';
  },
};
