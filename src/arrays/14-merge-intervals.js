// https://leetcode.com/problems/merge-intervals/
// O(N Log(N)) time | O(1) space
function merge(intervals) {
  const length = intervals.length; // 4
  intervals.sort((a, b) => a - b);
  let [_, previousEnd] = intervals[0]; // previousEnd=3
  let mergedIdx = -1;
  let result = [];

  for (let idx = 1; idx < length; idx++) {
    // idx=1,2,3
    const [start, end] = intervals[idx]; // start=2, end=6| start=8, end=10|
    if (previousEnd >= start) {
      // 3>2,6>8,10>15
      mergedIdx++; // 0
      intervals[mergedIdx][1] = end; //[1,6]
    }
    previousEnd = end; // previousEnd=10
  }

  if (mergedIdx === 0) {
    return intervals[0];
  } else if (mergedIdx < 0) {
    return result;
  } else if (mergedIdx > 0) {
    for (let idx = 0; idx <= mergedIdx; idx++) {
      result.push(intervals[idx]);
    }
    return result;
  }
}

describe('merge', () => {
  it('test #1', () => {
    expect(
      merge([
        [1, 3],
        [2, 6],
        [8, 10],
        [15, 18],
      ])
    ).toEqual([1, 6]);
  });
  it('test #2', () => {
    expect(
      merge([
        [1, 4],
        [4, 5],
      ])
    ).toEqual([1, 5]);
  });
});
