/* eslint-disable max-params */
module.exports = {
  getMaxArea: (w, h, arr1, arr2, arr3, arr4) =>
    Math.max(
      (arr1[arr1.length - 1] - arr1[1]) * h,
      (arr2[arr2.length - 1] - arr2[1]) * h,
      (arr3[arr3.length - 1] - arr3[1]) * w,
      (arr4[arr4.length - 1] - arr4[1]) * w
    ),
};
