/**
 * https://practice.geeksforgeeks.org/problems/cyclically-rotate-an-array-by-one2614/1
 * https://www.youtube.com/watch?v=gmu0RA5_zxs
 * O(k+n) time | O(1)
 */
class RotateClockWise {
  execute(arr, k) {
    //code here
    let length = arr.length;
    k = k % length;

    this.reverse(arr, 0, length - 1);
    this.reverse(arr, 0, k - 1);
    this.reverse(arr, k, length - 1);

    return arr;
  }

  reverse(arr, startIdx, endIdx) {
    while (startIdx <= endIdx) {
      this.swap(arr, startIdx, endIdx);
      startIdx++;
      endIdx--;
    }
  }

  swap(arr, startIdx, endIdx) {
    const temp = arr[startIdx];
    arr[startIdx] = arr[endIdx];
    arr[endIdx] = temp;
  }
}

describe('rotateClockWise', () => {
 

  it('test #1', () => {
    expect(new RotateClockWise().execute([1, 2, 3, 4, 5], 5)).toEqual([1, 2, 3, 4, 5]);
  });

  it('test #2', () => {
    expect(new RotateClockWise().execute([1, 2], 2)).toEqual([1, 2]);
  });

  it('test #3', () => {
    expect(new RotateClockWise().execute([1, 2, 3, 4, 5], 2)).toEqual([4, 5, 1, 2, 3]);
  });
  it('test #4', () => {
    expect(new RotateClockWise().execute([1, 2], 1)).toEqual([2, 1]);
  });

  it('test #5', () => {
    expect(new RotateClockWise().execute([1, 2, 3, 4, 5, 6, 7], 3)).toEqual([
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
