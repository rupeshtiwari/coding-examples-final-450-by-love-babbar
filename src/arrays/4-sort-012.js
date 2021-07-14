// O(N) time |  O(1)
function sort012(arr) {
  let counter = {
    0: 0,
    1: 0,
    2: 0,
  };

  for (let num of arr) {
    if (num === 0) {
      counter[0]++;
    } else if (num === 1) {
      counter[1]++;
    } else if (num === 2) {
      counter[2]++;
    }
  }

  let arrayIdx = 0;

  while (arrayIdx < arr.length) {
    for (let idx = 0; idx < counter[0]; idx++) {
      arr[arrayIdx] = 0;
      arrayIdx++;
    }

    for (let idx = 0; idx < counter[1]; idx++) {
      arr[arrayIdx] = 1;
      arrayIdx++;
    }

    for (let idx = 0; idx < counter[2]; idx++) {
      arr[arrayIdx] = 2;
      arrayIdx++;
    }
  }

  return arr;
}

describe('sort 0 1 2', () => {
  it('test #1', () => {
    expect(sort012([0, 2, 1, 2, 0])).toEqual([0, 0, 1, 2, 2]);
  });
  it('test #2', () => {
    expect(sort012([0, 1, 0])).toEqual([0, 0, 1]);
  });
});
