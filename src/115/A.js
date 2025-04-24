module.exports = {
  getCountOfTeams: (arr) => {
    const deps = new Array(arr.length).fill(-1);
    const getDep = (ind, curr) => {
      if (deps[ind] >= 0) {
        return deps[ind];
      }
      if (arr[ind] < 0) {
        deps[ind] = 1;
        return 1;
      }
      const d = getDep(arr[ind] - 1, curr + 1) + 1;
      deps[ind] = d;
      return d;
    };
    for (let j = 0; j < arr.length; j++) {
      getDep(j, 1);
    }
    return Math.max(...deps);
  },
};
