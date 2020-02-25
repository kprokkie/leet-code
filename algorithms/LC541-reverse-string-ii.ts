/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
    let str = [...s];
    k = k < str.length ? k : str.length;
    k--;
    for (let i = 0; i <=  k / 2; i++) {
        console.log(i, k, str);
        let temp = str[i];
        str[i] = str[k];
        str[k] = temp;
        k--;
    }
    return str.join('');
};

const s = "abcdefg", k = 4; // Output: "bacdfeg"
console.log(reverseStr(s, k));