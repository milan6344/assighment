// 1. Print each character of a string
let str1 = "HELLO";
for (let i = 0; i < str1.length; i++) {
  console.log(str1[i]);
}

// 2. Reverse a string
let str2 = "WORLD";
let rev = "";
for (let i = str2.length - 1; i >= 0; i--) {
  rev += str2[i];
}
console.log(rev);

// 3. Count characters in a string
let str3 = "JAVASCRIPT";
let count = 0;
for (let i = 0; str3[i] !== undefined; i++) {
  count++;
}
console.log(count);

// 4. Copy one string to another
let str4 = "COPY";
let copy = "";
for (let i = 0; i < str4.length; i++) {
  copy += str4[i];
}
console.log(copy);

// 5. Check if string is palindrome
let str5 = "MADAM";
let temp = "";
for (let i = str5.length - 1; i >= 0; i--) {
  temp += str5[i];
}
if (str5 === temp) {
  console.log("Palindrome");
} else {
  console.log("Not Palindrome");
}

// 6. Convert string to uppercase (manual)
let str6 = "hello";
let upper = "";
for (let i = 0; i < str6.length; i++) {
  upper += String.fromCharCode(str6.charCodeAt(i) - 32);
}
console.log(upper);

// 7. Find number of vowels
let str7 = "education";
let vowels = 0;
for (let i = 0; i < str7.length; i++) {
  let ch = str7[i];
  if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
    vowels++;
  }
}
console.log(vowels);
