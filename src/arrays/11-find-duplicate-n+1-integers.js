function findDuplicate(array) {
  const length = array.length;
  let count = 0;
  for (let idx = 0; idx < length; idx++) {
    const idx1 = array[idx] % length;
    console.log(idx1);
    array[idx1] = array[idx1] + length;
  }
  console.log(array);
  for (let idx = 0; idx < length; idx++) {
    const duplicates = Math.floor(array[idx] / length);
    if (duplicates > 1) {
      return idx;
    }
  }

  return count;
}
/**
 * [1,3,4,2,2]
 *
 * [1,8,14,7,7]
 *
 */

describe('findDuplicate', () => {
  it('test #1', () => {
    expect(findDuplicate([1, 3, 4, 2, 2])).toEqual(2);
  });
  it('test #2', () => {
    expect(findDuplicate([3, 1, 3, 4, 2])).toEqual(3);
  });
  it('test #3', () => {
    expect(findDuplicate([1, 1])).toEqual(1);
  });
  it('test #4', () => {
    expect(findDuplicate([1, 1, 2])).toEqual(1);
  });
});
