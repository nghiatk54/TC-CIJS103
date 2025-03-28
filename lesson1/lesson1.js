// exercise 14: check number is prime
function isPrime(num) {
  if (num == 1 || num == 2) return true;
  if (num <= 0) return false;
  for (let i = 2; i < num; i++) {
    if (num % i == 0) return false;
  }
  return true;
}
console.log(`Exercise 14: check number is prime`);
console.log(` Number 2 is prime: ${isPrime(2)}`);
console.log("================================================");
// exercise 15: print string n times
function printString(str, n) {
  let newStr = "";
  for (let i = 0; i < n; i++) {
    newStr += str;
    if (i < n - 1) newStr += " ";
  }
  console.log(newStr);
}
console.log(`Exercise 15: print string n times`);
printString("Hello", 5);
console.log("================================================");
// exercise 16: sum all number is odd in array
function sumOdd(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) sum += arr[i];
  }
  return sum;
}
console.log(`Exercise 16: sum all number is odd in array`);
console.log(sumOdd([1, 2, 3, 4, 5]));
// exercise 17: sum all number is greater than n in array
function sumGreaterThanN(arr, n) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > n) sum += arr[i];
  }
  return sum;
}
console.log(`Exercise 17: sum all number is greater than n in array`);
console.log(sumGreaterThanN([1, 2, 3, 4, 5], 3));
console.log("================================================");
// exercise 18: convert date YYYY-MM-DD to DD/MM/YYYY
function convertDate(date) {
  let dateArr = date.split("-");
  let newDate = dateArr[2] + "/" + dateArr[1] + "/" + dateArr[0];
  return newDate;
}
console.log(`Exercise 18: convert date YYYY-MM-DD to DD/MM/YYYY`);
console.log(convertDate("2025-03-27"));
console.log("================================================");
// exercise 19: get first third element in array
function getThirdElement(arr) {
  return arr.slice(0, 3);
}
console.log(`Exercise 19: get first third element in array`);
console.log(getThirdElement([1, 2, 3, 4, 5]));
console.log("================================================");
// exercise 20: check character include in string
function checkCharacter(str, char) {
  return str.includes(char);
}
console.log(`Exercise 20: check character include in string`);
console.log(checkCharacter("Hello", "e"));
console.log("================================================");
// exercise 21: merge two array
function mergeArray(arr1, arr2) {
  return [...arr1, ...arr2];
}
console.log(`Exercise 21: merge two array`);
console.log(mergeArray([1, 2, 3], [4, 5, 6]));
console.log("================================================");
// exercise 22: count number in array
function countNumber(arr, number) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == number) count++;
  }
  return count;
}
console.log(`Exercise 22: count number in array`);
console.log(countNumber([1, 2, 3, 4, 5, 3], 3));
console.log("================================================");
// exercise 23: filter odd number in array
function filterOdd(arr) {
  return arr.filter((item) => item % 2 != 0);
}
console.log(`Exercise 23: filter odd number in array`);
console.log(filterOdd([1, 2, 3, 4, 5]));
console.log("================================================");
// exercise 24: filter number is greater than n in array
function filterGreaterThanN(arr, n) {
  return arr.filter((item) => item > n);
}
console.log(`Exercise 24: filter number is greater than n in array`);
console.log(filterGreaterThanN([1, 2, 3, 4, 5], 3));
console.log("================================================");
// exercise 25: factorial of number
function factorial(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}
console.log(`Exercise 25: factorial of number`);
console.log(factorial(5));
console.log("================================================");
// exercise 26: separate even and odd number in array
function separateEvenOdd(arr) {
  let even = [];
  let odd = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) even.push(arr[i]);
    else odd.push(arr[i]);
  }
  return { even: even, odd: odd };
}
console.log(`Exercise 26: separate even and odd number in array`);
console.log(separateEvenOdd([1, 2, 3, 4, 5]));
console.log("================================================");
// exercise 27: sort asc array
function sortAsc(arr) {
  return arr.sort((a, b) => a - b);
}
console.log(`Exercise 27: sort asc array`);
console.log(sortAsc([5, 4, 3, 2, 1]));
console.log("================================================");
// exercise 28: sum even index in array
function sumEvenIndex(arr) {
  return arr.reduce((acc, curr, index) => {
    if (index % 2 == 0) return acc + curr;
    return acc;
  }, 0);
}
console.log(`Exercise 28: sum even index in array`);
console.log(sumEvenIndex([1, 2, 3, 4, 5]));
console.log("================================================");
// exercise 29: create new array with number multiply 2
function multiply2(arr) {
  return arr.map((item) => item * 2);
}
console.log(`Exercise 29: create new array with number multiply 2`);
console.log(multiply2([1, 2, 3, 4, 5]));
console.log("================================================");
// exercise 30: create new string by array string
function createString(arr) {
  return arr.join("");
}
console.log(`Exercise 30: create new string by array string`);
console.log(createString(["Hello", "World", "JavaScript"]));
console.log("================================================");
