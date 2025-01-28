module.exports = {
  getLanguage: (str) => {
    if (str.slice(-2) === 'po') {
      return 'FILIPINO';
    }
    if (str.slice(-5) === 'mnida') {
      return 'KOREAN';
    }
    return 'JAPANESE';
  },
};
