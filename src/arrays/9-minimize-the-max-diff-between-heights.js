// function getMinDiff(arr, k) {
//   // your code here

//   arr.sort((a, b) => a - b);
//   const last = arr[arr.length - 1];
//   const first = arr[0];

//   return last - k - (first + k);
// }

// xdescribe('getMinDiff', () => {
//   it('test #1', () => {
//     expect(getMinDiff([1, 5, 8, 10], 2)).toBe(5);
//   });
//   it('test #2', () => {
//     expect(getMinDiff([3, 9, 12, 16, 20], 3)).toBe(11);
//   });
//   it('test #3', () => {
//     expect(getMinDiff([2, 6, 3, 4, 7, 2, 10, 3, 2, 1], 5)).toBe(7);
//   });
// });

// /**
//  *
//  * 10t9 log(logN)
//  * 10t6 log(n)
//  * 10t5 log(n log(n))
//  *
//  * [1,5,8,10]
//  * [3  12]
//  * 9
//  * [3, 8]
//  * 5
//  *
//  *
//  */
