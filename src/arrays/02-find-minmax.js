
// https://www.geeksforgeeks.org/maximum-and-minimum-in-an-array/
/*
O( n  ) time | O(1) space
Comparison = n/2 (optimized)
*/
function findMaxMin2(array) {
  let max = Number.MIN_SAFE_INTEGER;
  let min = Number.MAX_SAFE_INTEGER;
  if (array.length < 2) {
    return { min: array[0], max: array[0] };
  }

  let length = array.length;
  let idx = 0;

  while (idx < length - 1) {
    if (array[idx] > array[idx + 1]) {
      // Either this 3 compares
      if (array[idx] > max) {
        max = array[idx];
      }
      if (array[idx + 1] < min) {
        min = array[idx + 1];
      }
    } else {
      // Or this 3 compares
      if (array[idx + 1] > max) {
        max = array[idx + 1];
      }
      if (array[idx] < min) {
        min = array[idx];
      }
    }
    idx += 2; // Dividing loop by 2 at each iteration (n/2)
  }

  return { min, max };
}

describe('findMaxMin2', () => {
  it('test #1', () => {
    expect(findMaxMin2([1000, 11, 445, 1, 330, 3000])).toEqual({
      min: 1,
      max: 3000,
    });
    expect(findMaxMin2([1000, -11])).toEqual({
      min: -11,
      max: 1000,
    });
    expect(findMaxMin2([31])).toEqual({
      min: 31,
      max: 31,
    });
  });
});

/*
O( n  ) time | O(1) space
Comparison = 2n
*/
function findMaxMin1(array) {
  let max = Number.MIN_SAFE_INTEGER;
  let min = Number.MAX_SAFE_INTEGER;

  if (array.length < 2) {
    return { min: array[0], max: array[0] };
  }

  for (let num of array) {
    if (num > max) {
      // 1 compare
      max = num;
    } else if (num <= min) {
      // 1 compare
      min = num;
    }
  }

  return { min, max };
}
describe('findMaxMin1', () => {
  it('test #1', () => {
    expect(findMaxMin1([1000, 11, 445, 1, 330, 3000])).toEqual({
      min: 1,
      max: 3000,
    });
    expect(findMaxMin1([1000, -11])).toEqual({
      min: -11,
      max: 1000,
    });
    expect(findMaxMin1([31])).toEqual({
      min: 31,
      max: 31,
    });
  });
});

/*
O( n log(n) ) time | O(1) space
*/
function findMaxMin(array) {
  array.sort((a, b) => a - b);
  return { min: array[0], max: array[array.length - 1] };
}

describe('findMaxMin', () => {
  it('test #1', () => {
    expect(findMaxMin([1000, 11, 445, 1, 330, 3000])).toEqual({
      min: 1,
      max: 3000,
    });
    expect(findMaxMin([1000, -11])).toEqual({
      min: -11,
      max: 1000,
    });
    expect(findMaxMin([31])).toEqual({
      min: 31,
      max: 31,
    });
  });
});
