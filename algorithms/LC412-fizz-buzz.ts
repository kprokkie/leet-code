/**
 * @param {number} n
 * @return {string[]}
 */

// Basic Approach
var fizzBuzz = function (n) {
    let result = [];
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0) {
            if (i % 5 === 0)
                result.push('FizzBuzz');
            else
                result.push('Fizz');
        } else if (i % 5 === 0) {
            if (i % 3 === 0)
                result.push('FizzBuzz');
            else
                result.push('Buzz');
        } else {
            result.push(i.toString());
        }
    }
    return result;
};

// String Concatenation // optimized 57%
var fizzBuzz2 = function (n) {
    let result = [];
    for (let i = 1; i <= n; i++) {
        let str = '';
        if (!(i % 3))
            str += 'Fizz';
        if (!(i % 5))
            str += 'Buzz';
        if (!str.length)
            str += i;
        result.push(str);
    }
    return result;
}

console.log(fizzBuzz(15));
console.log(fizzBuzz2(15));