/**
 * https://practice.geeksforgeeks.org/problems/cyclically-rotate-an-array-by-one2614/1
 */
function rotateClockWise(arr, n) {
  //code here
  if (arr.length < 3) return;

  const length = arr.length;

  for (let idx = 0; idx < n; idx++) {
    let temp = arr[1];
    arr[0] = arr[1];

    for (let idx = 2; idx < length - 1; ) {
      let current = arr[idx];
      arr[idx] = temp;
      temp = arr[idx];
    }

    arr[0] = arr[length - 1];
  }

  return arr;
}

fdescribe('rotate', () => {
  xit('test #1', () => {
    expect(rotateClockWise([1, 2, 3, 4, 5], 5)).toEqual([1, 2, 3, 4, 5]);
  });
  xit('test #2', () => {
    expect(rotateClockWise([1, 2], 2)).toEqual([1, 2]);
  });
  it('test #3', () => {
    expect(rotateClockWise([1, 2, 3, 4, 5], 2)).toEqual([4, 5, 1, 2, 3]);
  });
});
/**
 * [1, 2, 3, 4, 5] rotate 5 times.
 * [5, 1, 2, 3, 4]
 * [4,5, 1, 2, 3]
 * [3, 4,5, 1, 2]
 * [2,3, 4,5, 1 ]
 * [1,2,3, 4,5 ]
 *
 */
