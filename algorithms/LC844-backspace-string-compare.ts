/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function (S, T) {

    let stack1 = [], stack2 = [];

    for (let char of S) {
        if (char != '#') stack1.push(char); else stack1.pop();
    }

    for (let char of T) {
        if (char != '#') stack2.push(char); else stack2.pop();
    }

    return stack1.toString() === stack2.toString();

};

const S = "a##c", T = "#a#c";
console.log(backspaceCompare(S, T));

