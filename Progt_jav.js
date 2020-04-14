// 1. feladat: Adattípusok:

// 1.a) Egyszerű

// számok:
const number = 6;

// Stringek:
const String = "Ez egy string";

// Boolean:
let boolean = false;
boolean = true;

// 1.b)

// Array
const array1 = [1, 2, 32, 10, 40, 10, 3, 2, 6, 8];

// Object:
// const objects = { key: vlaue };

// Function:
const funk = () => {
  // itten beza csinálunk valamit...
};

// 2. Feladat: ref és érték szerinti átadódás:

// const numberTimesTwo = number * 2;
// console.log(numberTimesTwo);
// console.log(number);
// const arrayManipulation = (arr) => {
//   for ( let i = 0; i < arr.length; i++ ) {
//     return arr[i] * 2;
//   }
// }
// console.log(arrayManipulation(array1));
// console.log(array1);

// 3. feladat: Eldöntés:

const decide = (element, arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      return true;
    }
  }
  return false;
};

console.log(decide(3, array1));

// 4. maximum keresés:

const maxValue = (arr) => {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};

console.log(maxValue(array1));

// 5. 2-vel osztható két számjegyű:

const five = () => {
  let arr = [];
  for (let i = 10; i < 100; i++) {
    if (i % 2 === 0 && i >= 10) {
      arr.push(i);
    }
  }
  return arr;
};

console.log(five());

// 6. Metszet:

let array2 = [1, 2, 3, 40, 30, 2];

const section = (arr1, arr2) => {
  const container = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        if (!container.includes(arr1[i])) {
          container.push(arr2[j]);
        }
        break;
      }
    }
  }
  return container;
};

console.log(section(array1, array2));

// 7. export:

const sum = (a, b) => {
  return a + b;
};

const multi = (a, b) => {
  return a * b;
};

const devide = (a, b) => {
  return a/b;
};

module.exports = { sum, multi, devide };
