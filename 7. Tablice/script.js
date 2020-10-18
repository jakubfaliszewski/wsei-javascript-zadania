// Zadanie 1:
const arr = ['Ala', 'Babka', 'Czosnek'];
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}


// Zadanie 2:
const arr = ['Ala', 13, null, -5, undefined, 'Osiem', 'Yahoo!', 4, 0];
console.log(arr[0], arr[1]);
console.log(arr[arr.length - 1]);
arr.forEach((v) => {
    console.log(v);
});

arr.filter((v, i) => i % 2 === 0).forEach((v) => {
    console.log(v);
});

arr.filter((v) => typeof (v) === 'string').forEach((v) => {
    console.log(v);
});

arr.filter((v, i) => typeof (v) === 'number').forEach((v) => {
    console.log(v);
});

// Zadanie 3:

const arr = [13, 51, 3, -14, 2, 12, 4, 9];
console.log(arr.reduce((a, b) => a + b));
console.log(arr.reduce((a, b) => a - b));
console.log(arr.reduce((a, b) => a + b) / arr.length);
arr.filter((v, i) => v % 2 === 0).forEach((v) => {
    console.log(v);
});
arr.filter((v, i) => v % 2 !== 0).forEach((v) => {
    console.log(v);
});
let biggest = 0;
arr.forEach(v => {
    if (v > biggest) {
        biggest = v;
    }
});
console.log(biggest);
let smallest = 0;
arr.forEach(v => {
    if (v < smallest) {
        smallest = v;
    }
});
console.log(smallest);
const arrLength = arr.length - 1;
arr.forEach((v, i) => {
  console.log(arr[arrLength - i]);
});


// Zadanie 4:
function sumAndPrint(arr) {
    console.log(arr.reduce((a, b) => a + b));
}

sumAndPrint([1, 2, 3, 4]);

// Zadanie 5:
function printElementsXAvg(arr) {
    const avg = arr.reduce((a, b) => a + b) / arr.length;
    arr.forEach((v) => {
        console.log(v * avg);
    });;
}

printElementsXAvg([1, 2, 3, 4]);

// Zadanie 6:
function evenAvg(arr) {
    const evenNums = arr.filter((v, i) => v % 2 === 0);
    return evenNums.reduce((a, b) => a + b) / evenNums.length;
}

console.log(evenAvg([1, 2, 3, 4]));


// Zadanie 7:
let arr = [4, 17, 3, 2, -5, 23];
function sort(array) {
    return array.sort((a, b) => a - b);
}

console.log(sort(arr));

// Zadanie 8:

function sumIndexesOfTwoArrays(arr1, arr2) {
    let arrSum = 0;
    arr1.forEach((v, i) => arrSum += i);
    arr2.forEach((v, i) => arrSum += i);
    return arrSum;
}
// 0 + 0 + 1 + 2
console.log(sumIndexesOfTwoArrays(['el'], ['el', 'el', 'el']));

// Zadanie 9:
let arr = [4, 17, 3, 2, -5, 23];
function dropFromArray(array, el) {
    return array.filter((item) => item != el);
}

console.log(dropFromArray(arr, 17));

// Zadanie 10:
let arr = [-4, -17, 3, 2, -5, 23];

function makeElsOpposite(array) {
    return array.map((v) => v * -1);
}

console.log(makeElsOpposite(arr));
