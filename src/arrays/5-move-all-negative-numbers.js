// https://www.geeksforgeeks.org/move-negative-numbers-beginning-positive-end-constant-extra-space/
// 
class Solution {
  moveAllNegatives(array) {
    this.partition(array, 0, array.length - 1);

    return array;
  }

  partition(array, startIdx, endIdx) {
    const pivot = 0;
    let partitionIdx = 0;

    for (let idx = startIdx; idx < endIdx; idx++) {
      if (array[idx] < pivot) {
        this.swap(idx, partitionIdx, array);
        partitionIdx++;
      }
    }

    this.swap(partitionIdx, endIdx, array);
  }

  swap(idx1, idx2, array) {
    const temp = array[idx2];
    array[idx2] = array[idx1];
    array[idx1] = temp;
  }
}

describe('moveAllNegatives', () => {
  xit('test #1', () => {
    expect(
      new Solution().moveAllNegatives([-12, 11, -13, -5, 6, -7, 5, -3, -6])
    ).toEqual([-12, -13, -5, -7, -3, -6, 5, 6, 11]);
  });
  it('test #2', () => {
    expect(new Solution().moveAllNegatives([0, -1, 0])).toEqual([-1, 0, 0]);
  });
});
