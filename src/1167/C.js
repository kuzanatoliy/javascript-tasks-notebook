/* eslint-disable func-names */
function Dsu(number) {
  this.components = number;
  this.data = Array(number).fill(-1);
  this.unite = function (a, b) {
    a = this.find(a);
    b = this.find(b);
    if (a === b) {
      return;
    }
    this.data[a] += this.data[b];
    this.data[b] = a;
    this.components--;
  };
  this.find = function (a) {
    // eslint-disable-next-line no-return-assign
    return this.data[a] < 0 ? a : (this.data[a] = this.find(this.data[a]));
  };
  this.size = function (a) {
    return -this.data[this.find(a)];
  };
  this.getcomponents = function () {
    return this.components;
  };
  return this;
}

module.exports = {
  getCountsOfInformedUsers: (count, groups) => {
    const d = new Dsu(count);
    for (let i = 0; i < groups.length; i++) {
      for (let j = 1; j < groups[i].length; j++) {
        d.unite(groups[i][0] - 1, groups[i][j] - 1);
      }
    }
    const ans = [];
    for (let i = 0; i < count; i++) {
      ans[i] = d.size(i);
    }
    return ans;
  },
};
