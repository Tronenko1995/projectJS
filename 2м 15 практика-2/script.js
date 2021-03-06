"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрети?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

/* Способ 1 */
for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов', ''),
          b = prompt('На сколько оцените его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}

/* Способ 2 */
// let num = 1;

// while (num < 3) {
//     const a = prompt('Один из последних просмотренных фильмов', '');
//     if (a !== null && a !== '') {
//         if (a.length < 50) {
//             const b = prompt('На сколько оцените его?', '');
//             if (b !== null && b !== '')  {
//                 personalMovieDB.movies[a] = b;
//                 num++;
//             } else {
//                 console.log('ответ в виде пустой строки запрещен');
//                 continue;
//             }
//         } else {
//             console.log('нельзя вводить больше, чем 50 символов');
//             continue;
//         }
//     } else {
//         console.log('ответ в виде пустой строки запрещен');
//         continue;
//     }
// }

/* Способ 3*/
// let num = 1;

// do {
//     const a = prompt('Один из последних просмотренных фильмов', '');
//     if (a !== null && a !== '') {
//         if (a.length < 50) {
//             const b = prompt('На сколько оцените его?', '');
//             if (b !== null && b !== '')  {
//                 personalMovieDB.movies[a] = b;
//                 num++;
//             } else {
//                 console.log('ответ в виде пустой строки запрещен');
//                 continue;
//             }
//         } else {
//             console.log('нельзя вводить больше, чем 50 символов');
//             continue;
//         }
//     } else {
//         console.log('ответ в виде пустой строки запрещен');
//         continue;
//     }
// }
// while (num < 3);

if (personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
    alert('Вы киноман');
} else {
    alert ('Ошибка');
}

console.log(personalMovieDB);
