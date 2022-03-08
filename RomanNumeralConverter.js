/* 
Link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/roman-numeral-converter
Convert the given number into a roman numeral.
All roman numerals answers should be provided in upper-case.
convertToRoman(2) should return the string II.
convertToRoman(3) should return the string III.
convertToRoman(4) should return the string IV.
convertToRoman(649) should return the string DCXLIX
convertToRoman(798) should return the string DCCXCVIII
convertToRoman(891) should return the string DCCCXCI
*/
function convertToRoman(num) {
  var lookup = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    },
    roman = '',
    letter;
  for (letter in lookup) {
    while (num >= lookup[letter]) {
      roman += letter;
      num -= lookup[letter];
    }
  }
  return roman;
}

console.log(convertToRoman(1004));
