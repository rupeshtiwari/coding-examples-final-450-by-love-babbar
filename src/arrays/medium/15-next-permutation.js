/*
https://leetcode.com/problems/next-permutation/
 MEDIUM
*/
class NextPermutation {
  execute(array) {
    const length = array.length;
    let idx2 = -1;

    for (let idx = length - 2; idx >= 0; idx--) {
      if (array[idx] < array[idx + 1]) {
        idx2 = idx;
        break;
      }
    }

    if (idx2 < 0) {
      this.reverse(0, length - 1, array);

      return array;
    }

    let valueToSwap = array[idx2];

    let idx3 = idx2;

    while (idx3 < length) {
      if (array[idx3 + 1] > valueToSwap) {
        idx3++;
      } else {
        this.swap(idx2, idx3, array);
        break;
      }
    }

    this.reverse(idx2 + 1, length - 1, array);

    return array;
  }

  swap(idx1, idx2, array) {
    const temp = array[idx1];
    array[idx1] = array[idx2];
    array[idx2] = temp;
  }

  reverse(startIdx, endIdx, array) {
    while (startIdx <= endIdx) {
      this.swap(startIdx, endIdx, array);
      startIdx++;
      endIdx--;
    }
  }
}

describe('Next Permutation', () => {
  it('test #1', () => {
    const result = new NextPermutation().execute([
      10, 5, 8, 3, 7, 6, 5, 4, 2, 1,
    ]);
    expect(JSON.stringify(result)).toBe(
      JSON.stringify([10, 5, 8, 4, 1, 2, 3, 5, 6, 7])
    );
  });

  it('test #2', () => {
    const result = new NextPermutation().execute([1, 2, 3]);
    expect(JSON.stringify(result)).toBe(JSON.stringify([1, 3, 2]));
  });

  it('test #3', () => {
    const result = new NextPermutation().execute([1, 1, 5]);
    expect(JSON.stringify(result)).toBe(JSON.stringify([1, 5, 1]));
  });
});
