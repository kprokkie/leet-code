/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
	let pascalTriangle = [];
	let prevRow;

	for (let i = 0; i < numRows; i++) {
		let currRow = [];
		for (let j = 0; j <= i; j++) {
			currRow[j] = (j === 0 || j === i) ? 1 : prevRow[j] + prevRow[j - 1];
		}
		prevRow = currRow;
		pascalTriangle.push(currRow);
	}

	return pascalTriangle;
};

generate(10);

/*
Runtime: 44 ms, faster than 96.84% of JavaScript online submissions for Pascal's Triangle.
Memory Usage: 33.8 MB, less than 92.31% of JavaScript online submissions for Pascal's Triangle.
*/

/*
Input: 5
Output:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
*/
