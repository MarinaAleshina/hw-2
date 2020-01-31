// for (let i = 100; i > 0; i--) {
//   console.log(i);
// }

// let num = 101;
// while (num > 1) {
//   num--;
//   console.log(num);
// }

// for (let i = 1; i <= 100; i++) {
//   if(i % 2 !==1) {
//     console.log(i);
//   };
// }

// let num = 1;
// while (num <= 100) {
//   if (num % 2 === 0) {
//     console.log(num);
//   }
//   num ++;
// }

// let arr = [];

// for (let i = 0; i < 10; i++) {
//   arr.push(i);
// }
// console.log(arr);

// let arr = [];

// for (let i = 1; i < 10; i++) {
//   arr[i] = 'x';
// }
// console.log(arr);

// let arr = [];

// for (let i = 0; i < 10; i++) {
//   arr.push(Math.random().toFixed(2));
// }
// console.log(arr);

// let arr = [];

// for (let i = 0; i < 10; i++) {
//   arr.push(Math.round(Math.random()*10)+1)
// }
// console.log(arr);

// let  arr = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 0 && arr[i] < 10){
//     console.log(arr[i]);
//   }
// }

// let arr = [1, 1, 1, 2, 2, 5, 9, 9, 9, 9];
// for (let i = 0; i < arr.length; i++) {
//  if (arr[i] == 5){
//    console.log('есть');
//    break;
//  }
// }

// let arr = [1, 1, 1, 2, 2, 5, 9, 9, 9, 9];
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//    sum += arr[i];
// }
// console.log(sum);

// let arr = [1, 1, 1, 2, 2, 5, 9, 9, 9, 9];
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i] * arr[i];
// }
// console.log(sum);

// let arr = [1, 1, 1, 2, 2, 5, 9, 9, 9];
// let res;
// let sum = 0
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
//   res = sum / arr.length;
// }
// console.log(res);

// let car = {
//   name: 'Lexus',
//   age: 10,
//   lastService: '1 month',
//   create: 2008,
//   needRepair: false
// }

// let result;
// result = car.lastService;
// result.split(' ');

// if (result[0] > 5) {
//   console.log('Need Repair', car),
//   car.needRepair = true
// } else {
//   car.needRepair = false,
//   console.log(car)
// };

// let product = {
//   name: 'Яблоко',
//   price: '10$'
// };

// let min = 10;
// let max = 20;

// if (parseInt(product.price) >= min && parseInt(product.price) <= max) {
//   console.log(product.price)
// } else {
//   console.log("товар не найден")
// };

// let str = "JavaScript is a pretty good language";

// str1 = str.split(' ');

// var newArray = [];

// for (let i = 0; i < str1.length; i++) {
//   newArray.push(str1[i][0].toUpperCase() + str1[i].slice(1));
// }

// console.log(newArray.join(''));

// function doubleArray(newArr) {
//   console.log(newArr);
//   return newArr;
// }

// let newArr = doubleArray([1, 2, 3]);
// let doubleArr = [...newArr, 1, 2, 3];
// console.log(doubleArr);

function changeCollection() {
  let array = [];
  for (let i = 0; i < array.length; i++) {
    array[i].shift();
  }
}

let a = [1, 2, 3, 4];
let b = ["a", "b", "c"];
let c = ["hello", "world"];

changeCollection(a, b, c);

console.log(a, b, c);
