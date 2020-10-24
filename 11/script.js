"use strict"

let numberOfFilms = prompt('Сколько фильмов вы уже посмотрети?','');
console.log (numberOfFilms);

let personalMovieDB = {
    count :  numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};
console.log (personalMovieDB);

let quest1 = prompt('Один из последних просмотренных фильмов','');
let quest2 = prompt('На сколько оцените его?','');
personalMovieDB.movies = {quest1:quest2};
console.log(personalMovieDB);