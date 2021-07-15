/**
 * https://practice.geeksforgeeks.org/problems/cyclically-rotate-an-array-by-one2614/1
 */
function rotate(arr, n) {
  //code here
  /**
   *   [9, 8, 7, 6, 4, 2, 1, 3]
   *
   *   [3, 9, 8, 7, 6, 4, 2, 1]
   *
   *  [3,8, 7,1]
   *  [1,3,8,7]
   *  [7,1,3,8]
   *
   * O(n) time | O(1) space
   * */
  const length = arr.length;

  for (let idx = 0; idx < length; idx++) {
    let nextIdx = idx + n;
    if (nextIdx > length - 1) {
      nextIdx = (nextIdx % length) + 1;
    }

    swap(idx, nextIdx, arr);
  }

  return arr;
}

function swap(idx1, idx2, arr) {
  const temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

describe('rotate', () => {
  it('test #1', () => {
    expect(rotate([1, 2, 3, 4, 5], 5)).toEqual([5, 1, 2, 3, 4]);
  });
});
