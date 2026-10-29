// Q1: Reverse a string
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

console.log("Q1:", reverseString("javascript")); // tpircsavaj


// Q2: Check if a string is palindrome
function isPalindrome(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return str.toLowerCase() === reversed.toLowerCase();
}

console.log("Q2:", isPalindrome("racecar")); // true
console.log("Q2:", isPalindrome("hello"));   // false


// Q3: Count vowels and consonants
function countVowelsAndConsonants(str) {
  let vowels = "aeiou";
  let vCount = 0;
  let cCount = 0;

  for (let i = 0; i < str.length; i++) {
    let ch = str[i].toLowerCase();
    if (ch >= "a" && ch <= "z") {
      if (vowels.includes(ch)) {
        vCount++;
      } else {
        cCount++;
      }
    }
  }

  return { vowels: vCount, consonants: cCount };
}

console.log("Q3:", countVowelsAndConsonants("hello world"));


// Q4: Capitalize the first letter of each word
function capitalizeWords(str) {
  let words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (word.length > 0) {
      words[i] = word[0].toUpperCase() + word.slice(1).toLowerCase();
    }
  }
  return words.join(" ");
}

console.log("Q4:", capitalizeWords("learn javascript strings"));


// Q5: Find the longest word in a sentence
function findLongestWord(sentence) {
  let words = sentence.split(" ");
  let longest = "";

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }
  return longest;
}

console.log("Q5:", findLongestWord("Antigravity gives awesome coding experience"));


// Q6: Remove duplicate characters from a string
function removeDuplicates(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    if (!result.includes(ch)) {
      result += ch;
    }
  }
  return result;
}

console.log("Q6:", removeDuplicates("programming")); // progamin


// Q7: Count occurrences of a specific character
function countChar(str, target) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === target.toLowerCase()) {
      count++;
    }
  }
  return count;
}

console.log("Q7:", countChar("banana", "a")); // 3


// Q8: Truncate string if it exceeds max length
function truncate(str, limit) {
  if (str.length <= limit) {
    return str;
  }
  return str.slice(0, limit) + "...";
}

console.log("Q8:", truncate("JavaScript is very popular", 10)); // JavaScrip...


// Q9: Check if string contains only digits
function isOnlyDigits(str) {
  if (str.length === 0) return false;

  for (let i = 0; i < str.length; i++) {
    if (str[i] < "0" || str[i] > "9") {
      return false;
    }
  }
  return true;
}

console.log("Q9:", isOnlyDigits("12345")); // true
console.log("Q9:", isOnlyDigits("12a45")); // false


// Q10: Mask all characters except the last 4
function maskString(str) {
  if (str.length <= 4) return str;

  let masked = "";
  for (let i = 0; i < str.length - 4; i++) {
    masked += "*";
  }
  return masked + str.slice(-4);
}

console.log("Q10:", maskString("9876543210")); // ******3210


// Q11: Reverse words in a sentence
function reverseWords(sentence) {
  let words = sentence.split(" ");
  let reversed = [];

  for (let i = words.length - 1; i >= 0; i--) {
    if (words[i] !== "") {
      reversed.push(words[i]);
    }
  }
  return reversed.join(" ");
}

console.log("Q11:", reverseWords("  the sky   is blue  ")); // blue is sky the


// Q12: Check if two strings are anagrams
function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  let sorted1 = str1.toLowerCase().split("").sort().join("");
  let sorted2 = str2.toLowerCase().split("").sort().join("");

  return sorted1 === sorted2;
}

console.log("Q12:", isAnagram("listen", "silent")); // true
console.log("Q12:", isAnagram("hello", "world"));   // false


// Q13: Count frequency of each character
function charFrequency(str) {
  let freq = {};

  for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    if (freq[ch]) {
      freq[ch] += 1;
    } else {
      freq[ch] = 1;
    }
  }
  return freq;
}

console.log("Q13:", charFrequency("javascript"));


// Q14: Find first non-repeating character
function firstUniqueChar(str) {
  for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    if (str.indexOf(ch) === str.lastIndexOf(ch)) {
      return ch;
    }
  }
  return null;
}

console.log("Q14:", firstUniqueChar("swiss")); // w


// Q15: String compression (e.g. "aabcccccaaa" -> "a2b1c5a3")
function compress(str) {
  if (str.length === 0) return "";

  let result = "";
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      result += str[i] + count;
      count = 1;
    }
  }
  return result;
}

console.log("Q15:", compress("aabcccccaaa")); // a2b1c5a3


// Q16: Convert string to camelCase
function toCamelCase(str) {
  let words = str.split(" ");
  let result = words[0].toLowerCase();

  for (let i = 1; i < words.length; i++) {
    let word = words[i];
    if (word.length > 0) {
      result += word[0].toUpperCase() + word.slice(1).toLowerCase();
    }
  }
  return result;
}

console.log("Q16:", toCamelCase("user first name")); // userFirstName


// Q17: Check if string is rotation of another string
function isRotation(s1, s2) {
  if (s1.length !== s2.length) return false;
  let combined = s1 + s1;
  return combined.includes(s2);
}

console.log("Q17:", isRotation("hello", "llohe")); // true
console.log("Q17:", isRotation("hello", "world")); // false


// Q18: Custom trim function (removes spaces from start and end)
function customTrim(str) {
  let start = 0;
  let end = str.length - 1;

  while (start <= end && str[start] === " ") {
    start++;
  }
  while (end >= start && str[end] === " ") {
    end--;
  }

  return str.slice(start, end + 1);
}

console.log("Q18:", `"${customTrim("   hello world   ")}"`); // "hello world"


// Q19: Find all substrings of a string
function getSubstrings(str) {
  let result = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      result.push(str.slice(i, j));
    }
  }
  return result;
}

console.log("Q19:", getSubstrings("cat")); // ['c', 'ca', 'cat', 'a', 'at', 't']


// Q20: Basic email validation
function isValidEmail(email) {
  if (!email.includes("@") || !email.includes(".")) {
    return false;
  }

  let atIndex = email.indexOf("@");
  let dotIndex = email.lastIndexOf(".");

  if (atIndex > 0 && dotIndex > atIndex + 1 && dotIndex < email.length - 1) {
    return true;
  }
  return false;
}

console.log("Q20:", isValidEmail("user@example.com")); // true
console.log("Q20:", isValidEmail("invalid-email"));    // false
