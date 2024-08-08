module.exports = {
  isItPossibleToAchiveTheArray: (array, k) => {
    const n = array.length;
    let max = 0;
    let a = array.map((x) => {
      if (max < Number(x)) {
        max = Number(x);
      }
      return Number(x);
    });
    let kk = 1;
    array = [];
    while (kk <= max) {
      array.push(kk);
      kk *= k;
    }

    const marked = new Array(array.length).fill(false);
    a = a.sort((aa, bb) => {
      if (aa > bb) {
        return 1;
      }
      if (aa < bb) {
        return -1;
      }
      return 0;
    });
    array = array.sort((aa, bb) => {
      if (aa > bb) {
        return 1;
      }
      if (aa < bb) {
        return -1;
      }
      return 0;
    });

    let answer = true;
    for (let i = n - 1; i >= 0; i--) {
      let j = array.length - 1;
      while (a[i] > 0 && j >= 0) {
        if (a[i] - array[j] >= 0 && !marked[j]) {
          a[i] -= array[j];
          marked[j] = true;
        }
        j--;
      }
      if (a[i] !== 0) {
        answer = false;
      }
    }
    return answer ? 'YES' : 'NO';
  },
};
