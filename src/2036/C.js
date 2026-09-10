/* eslint-disable max-depth */
/* eslint-disable complexity */
/* eslint-disable prefer-destructuring */
module.exports = {
  containsBeautifylNumber: (map, queries) => {
    const string = map.split('');
    const is1100 = new Array(string.length).fill(false);
    let count1100 = 0;
    for (let i = 0; i <= string.length - 4; i++) {
      if (
        string[i] === '1' &&
        string[i + 1] === '1' &&
        string[i + 2] === '0' &&
        string[i + 3] === '0'
      ) {
        is1100[i] = true;
        count1100++;
      }
    }

    const results = [];

    for (let i = 0; i < queries.length; i++) {
      const index = queries[i][0] - 1;
      const val = queries[i][1];

      if (string[index] === val) {
        results.push(count1100 > 0 ? 'YES' : 'NO');
        continue;
      }

      string[index] = val.toString();

      for (let j = index - 3; j <= index; j++) {
        const fl = j <= string.length - 4 && j >= 0;
        if (fl) {
          const was1100 = is1100[j];
          const now1100 =
            string[j] === '1' &&
            string[j + 1] === '1' &&
            string[j + 2] === '0' &&
            string[j + 3] === '0';

          if (was1100 && !now1100) {
            is1100[j] = false;
            count1100--;
          } else if (!was1100 && now1100) {
            is1100[j] = true;
            count1100++;
          }
        }
      }

      results.push(count1100 > 0 ? 'YES' : 'NO');
    }

    return results;
  },
};
