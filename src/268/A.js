module.exports = {
  checkCountOfGuestUniforms: (uniforms) => {
    let count = 0;
    for (let i = 0; i < uniforms.length; i++) {
      for (let j = 0; j < uniforms.length; j++) {
        if (i === j) {
          continue;
        }
        if (uniforms[i][0] === uniforms[j][1]) {
          count++;
        }
      }
    }
    return count;
  },
};
