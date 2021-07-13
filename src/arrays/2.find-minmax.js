/*
O( n  ) time | O(1) space
Comparison = n/2
*/
function findMaxMin2(array) {
  let max = Number.MIN_SAFE_INTEGER;
  let min = Number.MAX_SAFE_INTEGER;

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

/*
O( n  ) time | O(1) space
Comparison = 2n
*/
function findMaxMin1(array) {
  let max = Number.MIN_SAFE_INTEGER;
  let min = Number.MAX_SAFE_INTEGER;

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

/*
O( n log(n) ) time | O(1) space
*/
function findMaxMin(array) {
  array.sort((a, b) => a - b);
  return { min: array[0], max: array[array.length - 1] };
}

describe('findMaxMin', () => {
  it('test #1', () => {
    const { min, max } = findMaxMin([1000, 11, 445, 1, 330, 3000]);
    expect(min).toBe(1);
    expect(max).toBe(3000);
  });
  it('test #2', () => {
    const { min, max } = findMaxMin1([1000, 11, 445, 1, 330, 3000]);
    expect(min).toBe(1);
    expect(max).toBe(3000);
  });
});
