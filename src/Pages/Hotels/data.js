export const emptyArr = new Array(50);

const cities = ['Анталия', 'Туапсе', 'Рим', 'Париж'];
const countries = ['Тайланд', 'Грузия', 'Франция', 'РандомСити'];
const photos = ['hotel1.jpg', 'hotel2.jpg', 'hotel3.jpeg', 'hotel4.jpg'];
const names = ['Metallica Hotel', 'Muse Hotel', 'Linkin Park Hotel', 'Anime Hotel'];

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

export const data = emptyArr.fill("").map((_, ind) => {
    return {
        id: ind,
        name: names[getRandomInt(4)],
        photo: photos[getRandomInt(4)],
        country: countries[getRandomInt(4)],
        city: cities[getRandomInt(4)],
        street: 'Пивчена Отдыхова c рыбкой',
        phones: ['8 917 705 60 12', '8 927 828 48 48'],
        email: 'i_want_swim_in_the_sea@please.thx',
    };
});
