--1. Print all array values
let fruits = ["Apple", "Banana", "Mango"];

for (let fruit of fruits) {
  console.log(fruit);
}

--2. Sum of array numbers
let numbers = [10, 20, 30, 40];
let sum = 0;

for (let num of numbers) {
  sum += num;
}

console.log("Total =", sum);

--3. Find largest number in array
let marks = [45, 88, 72, 90, 60];
let largest = marks[0];

for (let value of marks) {
  if (value > largest) {
    largest = value;
  }
}

console.log("Largest =", largest);

--4. Count vowels in a string
let text = "javascript";
let count = 0;

for (let char of text) {
  if ("aeiou".includes(char)) {
    count++;
  }
}

console.log("Vowels =", count);

--5. Reverse a string
let name = "Milan";
let reverse = "";

for (let char of name) {
  reverse = char + reverse;
}

console.log("Reverse =", reverse);

--6. Print even numbers from array
let nums = [1, 2, 3, 4, 5, 6];

for (let n of nums) {
  if (n % 2 === 0) {
    console.log(n);
  }
}

--7. Find total characters in string
let word = "Programming";
let count = 0;

for (let char of word) {
  count++;
}

console.log("Total characters =", count);