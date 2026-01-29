--1. Print object properties and values
let student = {
  name: "Milan",
  age: 22,
  course: "JavaScript"
};

for (let key in student) {
  console.log(key + " : " + student[key]);
}

--2. Count properties in an object
let mobile = {
  brand: "Samsung",
  price: 15000,
  color: "Black"
};

let count = 0;

for (let key in mobile) {
  count++;
}

console.log("Total properties =", count);

--3. Print array index and value
let colors = ["Red", "Green", "Blue"];

for (let index in colors) {
  console.log(index + " => " + colors[index]);
}
-- 4. Sum of object values
let marks = {
  math: 80,
  science: 75,
  english: 90
};

let total = 0;

for (let subject in marks) {
  total += marks[subject];
}

console.log("Total Marks =", total);

--5. Find longest word in an object
let words = {
  w1: "apple",
  w2: "banana",
  w3: "grapes"
};

let longest = "";

for (let key in words) {
  if (words[key].length > longest.length) {
    longest = words[key];
  }
}

console.log("Longest word =", longest);

--6. Convert object values to uppercase
let city = {
  c1: "delhi",
  c2: "mumbai",
  c3: "chennai"
};

for (let key in city) {
  city[key] = city[key].toUpperCase();
}

console.log(city);
--7. Check if property exists in object
let user = {
  name: "Amit",
  age: 25
};

let found = false;

for (let key in user) {
  if (key === "age") {
    found = true;
  }
}

console.log("Age exists?", found);