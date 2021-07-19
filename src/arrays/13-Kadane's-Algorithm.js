function maxSubArraySum(arr) {
  let overAllMax = Number.MIN_SAFE_INTEGER;
  let currentSum = 0;
  for (let idx = 0; idx < arr.length; idx++) {
    currentSum += arr[idx];
    if (currentSum > overAllMax) overAllMax = currentSum;
    // Whenever, current sum is negative reset it to Zero.
    if (currentSum < 0) currentSum = 0;
  }

  return overAllMax;
}

describe('kadane Algorithm Max Contigous Subarray Sum', () => {
  it('test #1', () => {
    expect(maxSubArraySum([1, 2, 3, -2, 5])).toEqual(9);
  });
  it('test #2', () => {
    expect(maxSubArraySum([-1, -2, -3, -4])).toEqual(-1);
  });
  it('test #2', () => {
    expect(
      maxSubArraySum([
        74, -72, 94, -53, -59, -3, -66, 36, -13, 22, 73, 15, -52, 75,
      ])
    ).toEqual(156);
  });
});
