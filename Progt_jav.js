// 1. feladat: Adattípusok:

// 1.a) Egyszerű

// számok:
let number = 6;

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

// 2.1: érték szerinti átadódás( tehát nem változik meg az eredeti változó értéke ):
let newNumber = number * 2;

console.log(number, newNumber);

// 2.2 referencia szeritni átadódás: nem az arraynek nincs értéke az csak egy a memóriából hozzárendelt értékre mutat:
let refArray = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * i + 1;
  }
  return arr;
};

console.log(refArray(array1));
console.log(array1);

let shouldBeEqual = array1;
console.log(shouldBeEqual);

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

const sum = (x, y) => {
  return x + y;
};

const multi = (x, y) => {
  return x * y;
};

const devide = (x, y) => {
  return x / y;
};

module.exports = { sum, multi, devide };

// 8. Mátrix:

const matrix = (x, y) => {
  let arr = new Array(x);
  for (let i = 0; i < x; i++) {
    arr[i] = new Array(y);
    for (let j = 0; j < y; j++) {
      arr[i][j] = i * j;
    }
  }
  return arr;
};

const generateMatrix = matrix(3, 3);
console.log(generateMatrix);

