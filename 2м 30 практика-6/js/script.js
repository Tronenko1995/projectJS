/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    const advMass = document.querySelectorAll('.promo__adv img'),
          poster = document.querySelector('.promo__bg'),
          genre = poster.querySelector('.promo__genre'),
          movieList = document.querySelector('.promo__interactive-list'),
          form = document.querySelector('.add'),
          input = form.querySelector('.adding__input'),
          checkbox = form.querySelector('[type="checkbox"]');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        let newText = input.value.toUpperCase();
        const favorite = checkbox.checked;

        if (newText) {

            if (newText.length > 21) {
                newText = `${newText.slice(0, 22)}...`;
            }

            if (favorite) {
                console.log('Добавляем любимый фильм')
            }

            movieDB.movies.push(newText);
            sortArr(movieDB.movies);

            newRendering(movieDB.movies, movieList);
        }

        e.target.reset();
    })

    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };

    const makeChanges = () => {
    genre.textContent = 'Драма';

    poster.style.backgroundImage = 'url(img/bg.jpg)';
    };

    const sortArr = (arr) => {
        arr.sort();
    };

    
    function newRendering(films, parent) {
        parent.innerHTML = '';
        sortArr(films);

        films.forEach((film, i) => {
            movieList.innerHTML += `
                <li class="promo__interactive-item">${i + 1} ${film}
                    <div class="delete"></div>
                </li>
            `;
        });


        document.querySelectorAll('.delete').forEach((btn, i) => {

            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                newRendering(films, parent);
            });
            
        });
    
    }

    deleteAdv(advMass);
    makeChanges();
    newRendering(movieDB.movies, movieList);


});