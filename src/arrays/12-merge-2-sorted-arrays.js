/**
 * explanation: https://i.imgur.com/EDbU7I6.png
 * O(n+m) time | O(1) space
 * @param {*} arr1
 * @param {*} arr2
 */
function mergeTwoSortedArrays(arr1, arr2) {
  let lastIdx = arr1.length + arr2.length - 1;
  let idx1 = arr1.length - 1;
  let idx2 = arr2.length - 1;

  if (arr1.length < 1) return arr2;
  if (arr2.length < 1) return arr1;

  while (idx2 >= 0) {
    if (idx1 >= 0 && arr1[idx1] >= arr2[idx2]) {
      arr1[lastIdx] = arr1[idx1];
      idx1--;
      lastIdx--;
    } else {
      arr1[lastIdx] = arr2[idx2];
      idx2--;
      lastIdx--;
    }
  }
  return arr1;
}

describe('mergeTwoSortedArrays', () => {
  it('test #1', () => {
    expect(mergeTwoSortedArrays([1, 3, 5, 7], [0, 2, 6, 8, 9])).toEqual([
      0, 1, 2, 3, 5, 6, 7, 8, 9,
    ]);
  });
  it('test #2', () => {
    expect(mergeTwoSortedArrays([10, 12], [5, 18, 20])).toEqual([
      5, 10, 12, 18, 20,
    ]);
  });
});
