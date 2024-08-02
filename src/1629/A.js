module.exports = {
  getMaxPossibleMemory: (programs, memories, memory) => {
    const arr = programs
      .map((item, index) => [item, memories[index]])
      .sort((a, b) => a[0] - b[0]);
    for (let j = 0; j < arr.length && memory >= arr[j][0]; j++) {
      memory += arr[j][1];
    }
    return memory;
  },
};
