function minJumps(array) {
  let length = array.length;
  if (length === 1) {
    return -1;
  }
  if (array[0] === 0) {
    return -1;
  }

  let jumps = 0;
  let position = { startIdx: 0, endIdx: 0 };

  while (true) {
    jumps++;
    let canReach = -1;
    let { startIdx: start, endIdx: end } = position;
    for (let idx = start; idx <= end; idx++) {
      canReach = Math.max(canReach, idx + array[idx]);
    }
    if (canReach >= length - 1) {
      return jumps;
    }

    position.startIdx = position.endIdx + 1;
    position.endIdx = canReach;

    if (position.startIdx > position.endIdx) {
      return -1;
    }
  }
}

describe('minJumps', () => {
  it('test #1', () => {
    expect(minJumps([1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9])).toBe(3);
  });
  it('test #2', () => {
    expect(minJumps([1, 4, 3, 2, 6, 7])).toBe(2);
  });
  it('test #3', () => {
    expect(minJumps([2, 3, 1, 1, 2, 4, 2, 0, 1, 1])).toBe(4);
  });
    it('test #4', () => {
      expect(minJumps([2, 3, 0, 1, 0, 4])).toBe(-1);
    });
});
