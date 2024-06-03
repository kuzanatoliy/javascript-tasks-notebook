const getPermutation = (
  arr,
  arrStart = 0,
  arrEnd = arr.length - 1,
  level = 0,
  result = []
) => {
  let max = 0;
  let index = 0;
  for (let i = arrStart; i <= arrEnd; i++) {
    index = arr[i] > max ? i : index;
    max = arr[i] > max ? arr[i] : max;
  }
  result[index] = level;
  level++;
  if (arrStart !== arrEnd) {
    if (index - 1 >= arrStart) {
      result = getPermutation(arr, arrStart, index - 1, level, result);
    }
    if (index + 1 <= arrEnd) {
      result = getPermutation(arr, index + 1, arrEnd, level, result);
    }
  }

  return result;
};

module.exports = {
  getPermutation,
};
