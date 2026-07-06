module.exports = {
  buildSchedule: (a, b) => {
    const arrA = new Array(a).fill(0).map((_, ind) => ind + 1);
    const arrB = new Array(b)
      .fill(0)
      .map((_, ind) => a + ind + 1)
      .reverse();
    return [...arrA, arrA.length + arrB.length + 1, ...arrB];
  },
};
