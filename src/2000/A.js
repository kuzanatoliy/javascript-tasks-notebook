module.exports = {
  couldItHaveBeenTheImportantInteger: (number) => {
    const str = number.toString();
    if (str.length < 3 || str[0] !== '1' || str[1] !== '0' || str[2] === '0') {
      return 'NO';
    }
    return Number(str.slice(2)) >= 2 ? 'YES' : 'NO';
  },
};
