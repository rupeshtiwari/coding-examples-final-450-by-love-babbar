// https://practice.geeksforgeeks.org/problems/union-of-two-arrays3538/1

// O(a+b) | time O(a+b) space
function doUnion(a, b) {
  n = a.length;
  m = b.length;
  const map = new Map();

  for (let idx = 0; idx < n; idx++) {
    map.set(a[idx], 1);
  }
  for (let idx = 0; idx < m; idx++) {
    map.set(b[idx], 1);
  }

    return map.size;
}

describe('doUnion', () => {
  it('test #1', () => {
    expect(doUnion([1, 2, 2, 3, 4, 5], [1, 2, 3])).toBe(5);
  });
});
