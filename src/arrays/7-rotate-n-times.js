/**
 * https://practice.geeksforgeeks.org/problems/cyclically-rotate-an-array-by-one2614/1
 */
function rotateClockWise(arr, n) {
  //code here

  const length = arr.length;
  if (n % length === 0) return arr;
  if (n > length) n = n % length;

  if (length < 2) return arr;

  if (length < 3) {
    let temp = arr[0];
    arr[0] = arr[1];
    arr[1] = temp;

    return arr;
  }

  for (let i = 0; i < n; i++) {
    let temp = arr[1];
    arr[1] = arr[0];

    for (let idx = 2; idx < length; idx++) {
      let current = arr[idx];
      arr[idx] = temp;
      temp = current;
    }

    arr[0] = temp;
  }

  return arr;
}

describe('rotateClockWise', () => {
  it('test #1', () => {
    expect(rotateClockWise([1, 2, 3, 4, 5], 5)).toEqual([1, 2, 3, 4, 5]);
  });
  it('test #2', () => {
    expect(rotateClockWise([1, 2], 2)).toEqual([1, 2]);
  });
  it('test #3', () => {
    expect(rotateClockWise([1, 2, 3, 4, 5], 2)).toEqual([4, 5, 1, 2, 3]);
  });
  it('test #4', () => {
    expect(rotateClockWise([1, 2], 1)).toEqual([2, 1]);
  });
  it('test #5', () => {
    expect(rotateClockWise([1, 2, 3, 4, 5, 6, 7], 3)).toEqual([
      5, 6, 7, 1, 2, 3, 4,
    ]);
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
