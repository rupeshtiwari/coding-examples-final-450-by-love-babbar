// https://practice.geeksforgeeks.org/problems/kth-smallest-element5635/1
/*
avg case O(N)
worst case O(N*N)
*/
function kthSmallestNumber(array, k) {
  let startIdx = 0;
  let endIdx = array.length - 1;

  return quickSelect(array, startIdx, endIdx);

  function quickSelect(array, startIdx, endIdx) {
    while (startIdx < endIdx) {
      let partitionIdx = partition(array, startIdx, endIdx);
      if (partitionIdx + 1 === k) {
        return array[partitionIdx];
      }
      // for finding smallest search on left of partition
      return quickSelect(array, startIdx, partitionIdx - 1);
    }
  }

  function partition(array, startIdx, endIdx) {
    let partitionIdx = startIdx;
    let pivot = array[endIdx];
    for (let idx = startIdx; idx < endIdx; idx++) {
      if (array[idx] <= pivot) {
        swap(idx, partitionIdx, array);
        partitionIdx++;
      }
    }
    swap(partitionIdx, endIdx, array);

    return partitionIdx;
  }

  function swap(idx1, idx2, array) {
    const temp = array[idx2];
    array[idx2] = array[idx1];
    array[idx1] = temp;
  }
}

describe('kthSmallestNumber', () => {
  it('test #1', () => {
    expect(kthSmallestNumber([1, 3, 2, 4, 8, 5], 2)).toBe(2);
  });
});
