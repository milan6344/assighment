// 1. Numbers 1 to 7
let arr15 = [];
let a = 1;
do {
  arr15.push(a);
  a++;
} while (a <= 7);
console.log(arr15);

// 2. Even numbers
let arr16 = [];
let b = 2;
do {
  arr16.push(b);
  b += 2;
} while (b <= 14);
console.log(arr16);

// 3. Odd numbers
let arr17 = [];
let d = 1;
do {
  arr17.push(d);
  d += 2;
} while (d <= 13);
console.log(arr17);

// 4. Squares
let arr18 = [];
let e = 1;
do {
  arr18.push(e * e);
  e++;
} while (e <= 7);
console.log(arr18);

// 5. Reverse numbers
let arr19 = [];
let f = 7;
do {
  arr19.push(f);
  f--;
} while (f > 0);
console.log(arr19);

// 6. Fixed value
let arr20 = [];
let g = 1;
do {
  arr20.push(100);
  g++;
} while (g <= 7);
console.log(arr20);

// 7. String characters
let arr21 = [];
let text = "DOWHILE";
let y = 0;
do {
  arr21.push(text[y]);
  y++;
} while (y < text.length);
console.log(arr21);