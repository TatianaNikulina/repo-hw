// 1. Возврат суммы элементов массива
/*
function summary(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

const array = [15, 35, 24, 12, -3];
console.log(summary(array));

*/

// 2. Возврат суммы двух массивов (число)

function calcSum(arr1, arr2) {
  let sum1 = 0;
  let sum2 = 0;
  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum1 += arr1[i];
  }
  for (let j = 0; j < arr2.length; j++) {
    sum2 += arr2[j];
  }
  sum = sum1 + sum2;
  return sum;
}

const number1 = [1, 0, 3, -2];
const number2 = [2, 3, 1, 1];
console.log(calcSum(number1, number2));

// ili tak mozhno reshit'
let result = arraySum([], []);
console.log(result);

function arraySum(arr1, arr2) {
  return sumOfArray(arr1) + sumOfArray(arr2);
}

function sumOfArray(array) {
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    result += array[i];
  }
  return result;
}

let result = arraySum([], []);
console.log(result);

// 3. Возврат века от года

function centuryFromYear(year) {
  let century;
  century = (year - (year % 100)) / 100 + 1;
  return century;
}

let year = +prompt("Введите год");
alert(`${centuryFromYear(year)} век от ${year} года`);

// 4. Возврат типа данных суммы двух аргументов

function typeOfSum(x, y) {
  return typeof (x + y);
}

console.log(typeOfSum(5, 10));
console.log(typeOfSum("Машино любимое число:", 10));
console.log(typeOfSum(true, 10));
console.log(typeOfSum(true, false));
console.log(typeOfSum(null, null));
console.log(typeOfSum(undefined, undefined));
console.log(typeOfSum({}, {}));

// 5. Поиск кол-ва вхождений символа в переменной

function symbolSearch(variable, symbol) {
  if (typeof variable !== typeof symbol) {
    alert("Ошибка. Типы данных должны совпадать.");
  } else {
    let counter = 0;
    variable = String(variable);
    symbol = String(symbol);
    const letters_of_var = variable.split("");
    for (let i = 0; i < letters_of_var.length; i++) {
      if (letters_of_var[i] === symbol) {
        counter++;
      }
    }
    return counter;
  }
}

let variable = "Hello World";
let symbol = "l";

// let variable = "Hello World";
// let symbol = 2;

// let variable = 20224320;
// let symbol = 2;

console.log(symbolSearch(variable, symbol));

// 6. Возврат массива счета до 0 переданного числа

function arrayOfNumbers(value) {
  let val_arr = [];
  for (let i = value; i >= 0; i--) {
    val_arr.push(i);
  }
  return val_arr;
}
let value = +prompt("Введите число");
console.log(arrayOfNumbers(value));
