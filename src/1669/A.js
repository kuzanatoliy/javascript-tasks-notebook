module.exports = {
  getDivision: (rating) => {
    if (rating < 1400) {
      return 'Division 4';
    } else if (rating < 1600) {
      return 'Division 3';
    } else if (rating < 1900) {
      return 'Division 2';
    } else {
      return 'Division 1';
    }
  },
};
