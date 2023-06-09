const arrDirectors = [
    {
        name: 'Стивен Спилберг',
        career: 'Продюсер, Режиссер, Актер, Сценарист, Монтажер',
        films: 'https://ru.wikipedia.org/wiki/%D0%A4%D0%B8%D0%BB%D1%8C%D0%BC%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%8F_%D0%A1%D1%82%D0%B8%D0%B2%D0%B5%D0%BD%D0%B0_%D0%A1%D0%BF%D0%B8%D0%BB%D0%B1%D0%B5%D1%80%D0%B3%D0%B0',
        top_rated_film: 'Список Шиндлера'
    },
    {
        name: 'Кристофер Нолан',
        career: 'Сценарист, Продюсер, Режиссер, Оператор, Монтажер, Актер, Композитор',
        films: 'https://www.film.ru/compilation/vse-filmy-kristofera-nolana-ot-luchshego-k-horoshemu',
        top_rated_film: 'Начало'
    },
    {
        name: 'Мартин МакДона',
        career: 'Сценарист, Режиссер, Продюсер',
        films: 'https://www.film.ru/person/martin-makdonah',
        top_rated_film: 'Три билборда на границе Эббинга, Миссури'
    },
    {
        name: 'Алексей Балабанов',
        career: 'Режиссер, Сценарист, Актер, Продюсер',
        films: 'https://www.film.ru/person/aleksey-balabanov',
        top_rated_film: 'Брат'
    },
    {
        name: 'Питер Фаррелли',
        career: 'Продюсер, Режиссер, Сценарист, Актер',
        films: 'https://www.film.ru/person/piter-farrelli',
        top_rated_film: 'Зеленая книга'
    },
    {
        name: 'Юрий Быков',
        career: 'Актер, Режиссер, Сценарист, Композитор, Монтажер, Продюсер',
        films: 'https://www.film.ru/person/yuriy-bykov',
        top_rated_film: 'Дурак'
    },
    {
        name: 'Жан-Марк Валле',
        career: 'Режиссер, Продюсер, Монтажер, Актер, Сценарист',
        films: 'https://www.film.ru/person/zhan-mark-valle',
        top_rated_film: 'Далласский клуб покупателей'
    },
];


// Указания места в html для возвращения инфо
const arrDirectorsList = document.getElementById('list');

// Перебор массива
arrDirectors.forEach((item) => {
    // создание списка li для вставки инфо
    const listDir = document.createElement('li');
    listDir.className = 'li_listDir';

    // создание див для имени режиссера
    const nameDir = document.createElement('div');
    nameDir.className = 'div_nameDir'
    // создание параграфа и класса для имени
    const eachDir = document.createElement('p');
    eachDir.className = 'each_name';
    eachDir.textContent = item.name;

    // создание див для дивов карьеры и фильмографии режиссера
    const careerAndFilms = document.createElement('div');
    careerAndFilms.className = 'career_films';

    // создание див для карьeры режиссера
    const careerDir = document.createElement('div');
    careerDir.className = 'div_careerDir';
    // создание параграфа и класса для карьеры
    const eachCareer = document.createElement('p');
    eachCareer.className = 'each_career';
    eachCareer.textContent = item.career;

    // создание див для фильмографии режиссера
    const filmsDir = document.createElement('div');
    filmsDir.className = 'div_filmsDir';
    // создание параграфа и класса для фильмографии режиссера
    const eachFilms = document.createElement('p');
    eachFilms.className = 'each_films';

    // создание ссылки для фильмографии режиссера
    const filmLink = document.createElement('a');
    filmLink.className = 'film_link';
    filmLink.textContent = 'фильмография';
    filmLink.href = item.films;

    // "вложение" инфо из массива в html
    arrDirectorsList.append(listDir);
    listDir.append(nameDir, careerAndFilms)
    careerAndFilms.append(careerDir, filmsDir);
    filmsDir.append(eachFilms);
    nameDir.append(eachDir);
    careerDir.append(eachCareer);
    eachFilms.append(filmLink);

});

//Переменная "вытаскивает" лучшие фильмы режиссеров
arrDirectors.forEach((item) => {
    // создание нового массива фильмов
    const arrTopFilms = arrDirectors.map(item =>
        item.top_rated_film
    );
    // преобразование массива в список через запятую
    let topFilmsList = arrTopFilms.join(', ');
    document.getElementById('top_film').textContent = topFilmsList;
})


