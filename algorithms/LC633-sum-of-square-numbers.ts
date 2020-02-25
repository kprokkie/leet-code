/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {

    // a2 + b2 = c;
    // b2 = c - a2

    for (let a = 0; a * a <= c; a++) {
        let b = Math.sqrt(c - a * a);
        console.log(b);
        if (b === parseInt(b))
            return true;
    }
    return false;

};

console.log(judgeSquareSum(3));