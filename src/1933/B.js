module.exports = {
  getCountOfOperations: (array) => {
    const mod = array.reduce((total, aI) => (total + aI) % 3, 0);
    if (mod === 0) {
      return 0;
    } else if (mod === 2) {
      return 1;
    } else {
      let can = false;
      array.forEach((aI) => {
        if (aI % 3 === 1) {
          can = true;
        }
      });
      return can ? 1 : 2;
    }
  },
};
