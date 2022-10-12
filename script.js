/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';

// const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false
// };

// console.log(personalMovieDB.count);

// const lastMovie = prompt('Один из последних просмотренных фильмов?', '');
// const rating = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[lastMovie] = rating;
// console.log(personalMovieDB);




// if (4 == 9){
//   console.log('OK');
// } else {
//   console.log('Error');
// }


// if (num < 49){
//   console.log('Error');
// } else if(num > 100){
//   console.log('Много');
// } else {
//   console.log('Ok');
// }

// (num === 50) ? console.log('Ok') : console.log('Error');

// const num = 50;
// switch(num){
//   case 49:
//     console.log('Неверно');
//     break;
//   case 100:
//     console.log('Много');
//     break;
//   case 50:
//     console.log('В точку');
//     break;
//   default:
//     console.log('Не в этот раз');
//     break;
// }

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if(hamburger === 3 && cola === 2 || fries === 3 && nuggets){
//   console.log('Все довольны!');
// } else {
//   console.log('Все пошло по пизде!!!');
// }
// let a, b, c, d = 'done';
// let num = 50;

// while(num <= 55){
//   console.log(num);
//   num++;
// }

// do {
//   console.log(num);
//   num++;
// }
// while (num < 55);

// for ( let i = 1; i < 10; i++){
//   if (i === 6){
//     // break;
//     continue;
//   }
//   console.log(i);
// }

for (let i = 0; i < 3; i++){
  console.log(i);
  for (let j = 0; j < 3; j++){
    console.log(j);
  }
}

let result = '';
const length = 7;

for (let i = 1; i < length; i++){

  for (let j = 0; j < i; j++){
    result += '*';
  }
  result += '\n';
}

console.log(result);

first: for (let i = 0; i < 3; i++){
  console.log(`First level: ${i}`);
  for (let j = 0; j < 3; j++){
    console.log(`Second level: ${j}`);
      for (let k = 0; k < 3; k++){
        if (k === 2) continue first;
        console.log(`Third level: ${k}`);
      }
  }
}