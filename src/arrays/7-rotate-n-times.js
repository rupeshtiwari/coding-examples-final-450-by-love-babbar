/**
 * https://practice.geeksforgeeks.org/problems/cyclically-rotate-an-array-by-one2614/1
 */
function rotate(arr, n) {
  //code here
  /**
   *
   * O(n) time | O(1) space
   * */
  const length = arr.length;
  if (n >= length) n = n % length;
  if (n === 0) return arr;
  let current = arr[0];

  for (let idx = 0; idx < length; idx++) {
    let nextIdx = idx + n;
    if (nextIdx >= length) nextIdx = nextIdx % length;
    current = move(current, nextIdx, arr);
  }

  return arr;
  function move(num, idx, arr) {
    const temp = arr[idx];
    arr[idx] = num;

    return temp;
  }
}



describe('rotate', () => {
  it('test #1', () => {
    expect(rotate([1, 2, 3, 4, 5], 5)).toEqual([1, 2, 3, 4, 5]);
  });
  it('test #1', () => {
    expect(rotate([1, 2], 2)).toEqual([1, 2]);
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
