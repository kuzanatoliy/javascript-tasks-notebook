module.exports = {
  getMinCost: (str) => {
    const gene = 'ACTG'.split('').map((item) => item.charCodeAt() - 25);
    const arr = str.split('').map((item) => item.charCodeAt() - 25);
    const costs = [];
    for (let j = 0; j <= str.length - gene.length; j++) {
      let res = 0;
      for (let jj = 0; jj < gene.length; jj++) {
        const max = Math.max(arr[j + jj], gene[jj]);
        const min = Math.min(arr[j + jj], gene[jj]);
        res += Math.min(max - min, 26 - max + min);
      }
      costs.push(res);
    }
    return Math.min(...costs);
  },
};
