let data = [5, 10, 15, 20, 25];

// Filter numbers > 10
let filtered = data.filter(n => n > 10);

// Multiply by 2
let mapped = filtered.map(n => n * 2);

// Sum all values
let total = mapped.reduce((sum, val) => sum + val, 0);

console.log(total);
console.log(filtered);
console.log(mapped);