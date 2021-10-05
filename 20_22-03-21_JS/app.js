/* Task1 (1. Написать скрипт, который будет ждать от пользователя ввода числа с клавиатуры, 
   сравнивать с заранее определенным числом в коде. Если число пользователя меньше, то 
   показывать alert с указанием "Меньше", если больше - "Больше" и ждать нового 
   ввода числа. Если пользователь угадал число - поздравить и закончить выполнение 
   скрипта.) */

// let value = 60;
// let result = +prompt("Please write a number");
// while (result !== value) {
//   result < value
//     ? alert("Your number is less")
//     : alert("Your number is greater");
//   //   if (result < value) {
//   //     alert("Your number is less");
//   //   } else {
//   //     alert("Your number is greater");
//   //   }
//   result = +prompt("Please write a new number");
// }
// if (result === value) {
//   alert(`Congratulations. You guessed the number! It is ${result}.`);
// }

/* Task2 (2.Реализовать таблицу умножения в виде многомерного массива. После этой реализации 
   любой запрос к элементам этого массива должен возвращать произведение его индексов.*/

// let n = +prompt("Введите размер квадратной матрицы");
// const matrix = [];
// for (let i = 0; i < n; i++) {
//   // matrix.push(i); - не надо этого писать
//   matrix[i] = [];
//   for (let j = 0; j < n; j++) {
//     // matrix[i].push(j); - не надо этого писать
//     matrix[i][j] = i * j;
//   }
// }
// console.table(matrix);

/* Task3 (3. Задан список команд (массив типа ['Заря', 'Буревестник', 'Вымпел',
      'Ураган'], число команд может изменяться путем добавления/удаления их из
      списка). Задача реализовать таблицу соревнований ("шахматка") между всеми
      возможными парами команд с присваиванием случайно сгенерированного
      результата матча (значения 0, 1 или 2). Учесть, что результат встречи
      между командой X и Y должны быть такими же как и между Y и X. При попытке
      обратится к результату матча между X и X - оповестить, что команда не
      может играть сама с собой. Для генерации случайного числа в диапазоне 0-2
      использовать следующий код: число = Math.floor(Math.random() *
      Math.floor(3)))*/

const clubs = ["Заря", "Буревестник", "Вымпел", "Ураган"];
const table = [];
for (let i = 0; i < clubs.length; i++) {
  table[i] = []; //new Array (clubs.length);
}
for (let str = 0; str < clubs.length; str++) {
  for (let col = str; col < clubs.length; col++) {
    if (str === col) {
      table[str][col] = "X";
    }
    let result = Math.floor(Math.random() * Math.floor(3));
    table[str][col] = result;
    if (result === 1) {
      result = 2;
    } else if (result === 2) {
      result = 1;
    }
    table[col][str] = result;
  }
}
console.table(table);
