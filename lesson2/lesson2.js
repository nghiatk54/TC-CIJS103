// exercise 1: sum number in array
function sumArray(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}
console.log("Exercise 1: sum number in array");
console.log(sumArray([1, 2, 3, 4, 5]));
console.log("================================================");
// exercise 2: count number value in array
function countOccurrences(arr, value) {
  return arr.filter((item) => item == value).length;
}
console.log("Exercise 2: count number value in array");
console.log(countOccurrences([1, 2, 3, 4, 5, 1, 2, 3], 1));
console.log("================================================");
// exercise 3: remove duplicate value in array
function removeDuplicates(arr) {
  return [...new Set(arr)];
}
console.log("Exercise 3: remove duplicate value in array");
console.log(removeDuplicates([1, 2, 3, 4, 5, 1, 2, 3]));
console.log("================================================");
// exercise 4: flatten array
function flattenArray(arr) {
  return arr.flat();
}
console.log("Exercise 4: flatten array");
console.log(flattenArray([1, 2, 3, [4, 5, 6], 7, 8, 9]));
console.log("================================================");
// exercise 5: check array is symmetric
function isSymmetric(arr) {
  return arr.join("") == arr.reverse().join("");
}
console.log("Exercise 5: check array is symmetric");
console.log(isSymmetric([1, 2, 3, 2, 1]));
console.log("================================================");
// exercise 6: find second largest number in array
function findSecondLargest(arr) {
  return arr.sort((a, b) => b - a)[1];
}
console.log("Exercise 6: find second largest number in array");
console.log(findSecondLargest([1, 2, 3, 4, 5]));
console.log("================================================");
// exercise 7: sort product by price in array
function sortProductByPrice(arr) {
  return arr.sort((a, b) => a.price - b.price);
}
console.log("Exercise 7: sort product by price in array");
console.log(
  sortProductByPrice([
    { name: "Product 1", price: 200 },
    { name: "Product 2", price: 100 },
    { name: "Product 3", price: 300 },
  ])
);
console.log("================================================");
// exercise 8: find most expensive product in array
function findMostExpensiveProduct(arr) {
  return arr.reduce((max, current) =>
    current.price > max.price ? current : max
  );
}
console.log("Exercise 8: find most expensive product in array");
console.log(
  findMostExpensiveProduct([
    { name: "Product 1", price: 200 },
    { name: "Product 2", price: 100 },
    { name: "Product 3", price: 300 },
  ])
);
console.log("================================================");
// exercise 9: group by type
function groupByType(arr) {
  return arr.reduce((acc, curr) => {
    if (acc.hasOwnProperty(curr.type)) {
      acc[curr.type].push(curr.name);
    } else {
      acc[curr.type] = [curr.name];
    }
    return acc;
  }, {});
}
console.log("Exercise 9: group by type");
console.log(
  groupByType([
    { name: "Product 1", type: "A" },
    { name: "Product 2", type: "B" },
    { name: "Product 3", type: "A" },
    { name: "Product 4", type: "B" },
  ])
);
console.log("================================================");
// exercise 10: is subset
function isSubset(arr1, arr2) {
  return arr2.every((item) => arr1.includes(item));
}
console.log("Exercise 10: is subset");
console.log(isSubset([1, 2, 3], [1, 2, 3, 4, 5]));
console.log("================================================");
// exercise 11: find max key in object
function findMaxKey(obj) {
  return Object.keys(obj).reduce((max, current) =>
    obj[current] > obj[max] ? current : max
  );
}
console.log("Exercise 11: find max key in object");
console.log(findMaxKey({ a: 1, b: 2, c: 3 }));
console.log("================================================");
// exercise 12: merge object sum value
function mergeObjectSumValue(obj1, obj2) {
  const result = {};
  for (const key in obj1) {
    if (result.hasOwnProperty(key)) {
      result[key] += obj1[key];
    } else {
      result[key] = obj1[key];
    }
  }
  for (const key in obj2) {
    if (result.hasOwnProperty(key)) {
      result[key] += obj2[key];
    } else {
      result[key] = obj2[key];
    }
  }
  return result;
}
console.log("Exercise 12: merge object sum value");
console.log(mergeObjectSumValue({ a: 1, b: 2 }, { c: 3, d: 4, a: 5, b: 6 }));
console.log("================================================");
// exercise 13: count element in array
function countElement(arr) {
  return arr.reduce((acc, curr) => {
    if (acc.hasOwnProperty(curr)) {
      acc[curr] += 1;
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, {});
}
console.log("Exercise 13: count element in array");
console.log(countElement([1, 2, 3, 4, 5, 1, 2, 3]));
console.log("================================================");
// exercise 14: clean object
function cleanObject(obj) {
  return Object.fromEntries(
    Object.entries(obj).filter(
      ([key, value]) => value !== undefined && value !== null
    )
  );
}
console.log("Exercise 14: clean object");
console.log(cleanObject({ a: 1, b: undefined, c: 3, d: null }));
console.log("================================================");
// exercise 15: has duplicate value
function hasDuplicateValue(arr) {
  return new Set(arr).size !== arr.length;
}
console.log("Exercise 15: has duplicate value");
console.log(hasDuplicateValue([1, 2, 3, 4, 5, 1, 2, 3]));
console.log("================================================");
// exercise 16: sum by group
function sumByGroup(arr) {
  return arr.reduce((acc, curr) => {
    if (acc.hasOwnProperty(curr.type)) {
      acc[curr.type] += curr.price;
    } else {
      acc[curr.type] = curr.price;
    }
    return acc;
  }, {});
}
console.log("Exercise 16: sum by group");
console.log(
  sumByGroup([
    { type: "A", price: 100 },
    { type: "B", price: 200 },
    { type: "A", price: 300 },
  ])
);
console.log("================================================");
// exercise 17: unique value
function uniqueValue(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])];
}
console.log("Exercise 17: unique value");
console.log(uniqueValue([1, 2, 3, 4, 5], [1, 2, 3, 7, 8, 9, 10]));
console.log("================================================");
// exercise 18: is permutation
function isPermutation(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  let len = arr1.length;
  for (let i = 0; i < len; i++) {
    if (arr1[i] !== arr2[len - 1 - i]) return false;
  }
  return true;
}
console.log("Exercise 18: is permutation");
console.log(isPermutation([1, 2, 3, 4, 5], [5, 4, 3, 2, 3]));
console.log("================================================");
// exercise 19: find longest string
function findLongestString(arr) {
  return arr.reduce((max, current) =>
    current.length > max.length ? current : max
  );
}
console.log("Exercise 19: find longest string");
console.log(findLongestString(["apple", "banana", "cherry", "date"]));
console.log("================================================");
// exercise 20: intersection of array
function intersection(arr1, arr2) {
  const mapValue = {};
  for (const item of arr1) {
    mapValue[item] = true;
  }
  return arr2.filter((item) => mapValue[item]);
}
console.log("Exercise 20: intersection of array");
console.log(intersection([1, 2, 3, 4, 5], [1, 2, 3, 7, 8, 9, 10]));
console.log("================================================");
// exercise 21: filter by min value
function filterByMinValue(arr, min) {
  return arr.filter((item) => item > min);
}
console.log("Exercise 21: filter by min value");
console.log(filterByMinValue([1, 2, 3, 4, 5], 3));
console.log("================================================");
// exercise 22: find longest value
function findLongestValue(obj) {
  return Object.values(obj).reduce((max, current) =>
    current.length > max.length ? current : max
  );
}
console.log("Exercise 22: find longest value");
console.log(findLongestValue({ a: "apple", b: "banana", c: "cherry" }));
console.log("================================================");
// exercise 23: group by first letter
function groupByFirstLetter(arr) {
  return arr.reduce((acc, curr) => {
    const firstLetter = curr[0];
    if (acc.hasOwnProperty(firstLetter)) {
      acc[firstLetter].push(curr);
    } else {
      acc[firstLetter] = [curr];
    }
    return acc;
  }, {});
}
console.log("Exercise 23: group by first letter");
console.log(
  groupByFirstLetter(["apple", "banana", "cherry", "date", "almond"])
);
console.log("================================================");
// exercise 24: get adults
function getAdults(arr) {
  return arr.filter((item) => item.age >= 18);
}
console.log("Exercise 24: get adults");
console.log(
  getAdults([
    { name: "John", age: 20 },
    { name: "Jane", age: 15 },
    { name: "Jim", age: 30 },
  ])
);
console.log("================================================");
// exercise 25: convert to array
function convertToArray(obj) {
  return Object.entries(obj);
}
console.log("Exercise 25: convert to array");
console.log(convertToArray({ a: 1, b: 2, c: 3 }));
console.log("================================================");
// exercise 26: sort string by lenth
function sortStringByLength(arr) {
  return arr.sort((a, b) => a.length - b.length);
}
console.log("Exercise 26: sort string by length");
console.log(sortStringByLength(["apple", "banana", "cherry", "date"]));
console.log("================================================");
// exercise 27: sum by key
function sumByKey(arr, key) {
  return arr.reduce((acc, curr) => {
    if (curr.hasOwnProperty(key)) {
      acc += curr[key];
    }
    return acc;
  }, 0);
}
console.log("Exercise 27: sum by key");
console.log(
  sumByKey(
    [
      { a: 1, b: 2 },
      { a: 3, b: 4 },
      { a: 5, b: 6 },
    ],
    "a"
  )
);
console.log("================================================");
// exercise 28: count words
function countWords(str) {
  return str.split(" ").length;
}
console.log("Exercise 28: count words");
console.log(countWords("Hello world"));
console.log("================================================");
// exercise 29: find min key
function findMinKey(obj) {
  return Object.keys(obj).reduce((min, current) =>
    obj[current] < obj[min] ? current : min
  );
}
console.log("Exercise 29: find min key");
console.log(findMinKey({ a: 10, b: 2, c: 3 }));
console.log("================================================");
