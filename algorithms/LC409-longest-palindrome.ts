/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  if (!s) return 0;

  let hash = {};

  for (let i = 0; i < s.length; i++) {
    hash[s[i]] = (!hash[s[i]]) ? 1 : ++hash[s[i]];
  }

  let eLength = 0;
  let oLength = 0;

  for (let key in hash) {
    if (!(hash[key] % 2)) eLength += hash[key];
    else oLength += !oLength ? hash[key] : hash[key] - 1;
  }

  console.log(eLength, oLength);
  console.log(hash);
  return eLength + oLength;
};

/**
Input: "abccccdd"
Output: 7
 */

const s = "abccccdd";
//const s = "abccccddd";
//const s = "civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth";
longestPalindrome(s);
