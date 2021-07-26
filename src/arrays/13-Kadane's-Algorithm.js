/**
 * https://leetcode.com/problems/maximum-subarray/
 * EASY
 * @param {array of numbers} nums
 * @returns
 */
function maxSubArraySumKadaneAlgo(nums) {
  let maxSum = Number.MIN_SAFE_INTEGER;
  let currentSum = 0;
  for (let idx = 0; idx < nums.length; idx++) {
    currentSum = Math.max(currentSum, 0) + nums[idx];
    maxSum = Math.max(currentSum, maxSum);
  }

  return maxSum;
}

describe('kadane Algorithm Max Contigous Subarray Sum', () => {
  it('test #1', () => {
    expect(maxSubArraySumKadaneAlgo([1, 2, 3, -2, 5])).toEqual(9);
  });
  it('test #2', () => {
    expect(maxSubArraySumKadaneAlgo([-1, -2, -3, -4])).toEqual(-1);
  });
  it('test #3', () => {
    expect(
      maxSubArraySumKadaneAlgo([
        74, -72, 94, -53, -59, -3, -66, 36, -13, 22, 73, 15, -52, 75,
      ])
    ).toEqual(156);
  });
  it('test #4', () => {
    expect(maxSubArraySumKadaneAlgo([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toEqual(
      6
    );
  });
  it('test #5', () => {
    expect(maxSubArraySumKadaneAlgo([1])).toEqual(1);
  });
  it('test #6', () => {
    expect(maxSubArraySumKadaneAlgo([5, 4, -1, 7, 8])).toEqual(23);
  });
});
