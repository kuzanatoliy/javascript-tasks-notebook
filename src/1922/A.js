module.exports = {
  isTemplateExist: (str1, str2, str3) => {
    for (let i = 0; i < str1.length; i++) {
      if (str3[i] !== str1[i] && str3[i] !== str2[i]) {
        return 'YES';
      }
    }
    return 'NO';
  },
};
