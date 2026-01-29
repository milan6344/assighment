// 1. Numbers 1 to 7
let arr1 = [];
for (let i = 1; i <= 7; i++) {
  arr1.push(i);
}
console.log(arr1);

// 2. Even numbers
let arr2 = [];
for (let i = 2; i <= 14; i += 2) {
  arr2.push(i);
}
console.log(arr2);

// 3. Odd numbers
let arr3 = [];
for (let i = 1; i <= 13; i += 2) {
  arr3.push(i);
}
console.log(arr3);

// 4. Squares of numbers
let arr4 = [];
for (let i = 1; i <= 7; i++) {
  arr4.push(i * i);
}
console.log(arr4);

// 5. Reverse numbers
let arr5 = [];
for (let i = 7; i >= 1; i--) {
  arr5.push(i);
}
console.log(arr5);

// 6. Characters of a string
let arr6 = [];
let str = "JAVASCR";
for (let i = 0; i < str.length; i++) {
  arr6.push(str[i]);
}
console.log(arr6);

// 7. Multiples of 3
let arr7 = [];
for (let i = 3; i <= 21; i += 3) {
  arr7.push(i);
}
console.log(arr7);