// https://practice.geeksforgeeks.org/problems/kadanes-algorithm-1587115620/1

/*
// O(n*n*n) time | O(1) space
function maxSubarraySum(arr) {
  // code here
  const length = arr.length;
  let maxSum = Number.MIN_SAFE_INTEGER;
  let sum = 0;

  for (let i = 0; i < length; i++) {
    for (let j = i; j < length; j++) {
      sum = 0;
      for (let k = i; k <= j; k++) {
        sum += arr[k];
        if (sum > maxSum) maxSum = sum;
      }
    }
  }
  return maxSum;
}
//*/

/*
// O(n*n) time | O(n) space
function maxSubarraySum(arr) {
  // code here
  const length = arr.length;
  let maxSum = Number.MIN_SAFE_INTEGER;
  let sum = 0;

  let prefixSum = [arr[0]];
  for (let idx = 1; idx < length; idx++) {
    prefixSum[idx] = prefixSum[idx - 1] + arr[idx];
  }

  for (let i = 0; i < length; i++) {
    for (let j = i; j < length; j++) {
      if (i > 1) sum = prefixSum[j] - prefixSum[i - 1];
      else sum = prefixSum[j];
      if (sum > maxSum) maxSum = sum;
    }
  }
  return maxSum;
}
//*/

//*
// O(n) time | O(1) space
// KADANE's Algorithm
function maxSubarraySum(arr) {
  let maxSum = Number.MIN_SAFE_INTEGER;
  let sum = 0;
  let length = arr.length;

  for (let idx = 0; idx < length; idx++) {
    sum += arr[idx];
    if (sum < 0) sum = arr[idx];
    if (sum > maxSum) maxSum = sum;
  }

  return maxSum;
}
//*/

describe('maxSubarraySum', () => {
  it('test #1', () => {
    expect(maxSubarraySum([-1, -2, -3, -4])).toEqual(-1);
  });
  it('test #2', () => {
    expect(maxSubarraySum([1, 2, 3, -2, 5])).toEqual(9);
  });
  it('test #3', () => {
    expect(maxSubarraySum([7, 5, -13, 5, 10, -2, 5])).toEqual(18);
  });
});
