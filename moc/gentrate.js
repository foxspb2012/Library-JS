'use strict';
const dayjs = require(`dayjs`);

// Сгенерировать целое положительное число в заданном интервале
const getRandomPositiveInteger = function (a = 0, b = 1) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};
console.log("Запуск функции 'getRandomPositiveInteger'", getRandomPositiveInteger(-10, 5));

// Сгенерировать целое число в заданном интервале
const getRandomInteger = function (a = 0, b = 1) {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};
console.log("Запуск функции 'getRandomPositiveInteger'", getRandomInteger(1, 5));

// Сгенерировать число в заданном интервале с "плавающей" запятой
const getRandomPositiveFloat = function (a, b, digits = 1) {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;
  return Number(result.toFixed(digits));
};
console.log("Запуск функции 'getRandomPositiveFloat'", getRandomPositiveFloat(1, 5, 3));

// Перемешать массив
const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const randomPosition = Math.floor(Math.random() * i);
    [array[i], array[randomPosition]] = [array[randomPosition], array[i]];
  }

  return array;
};
console.log("Запуск функции 'shuffle'", shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// Сгенерировать случайную дату (два варианта)
const generateDate = () => dayjs().add(getRandomInteger(-10, 10), 'day').format();
const generateDateStart = (date) => dayjs(date).add(getRandomInteger(1,6), 'hour').format();
const generateDateTo = (dateStart) => dayjs(dateStart).add(getRandomInteger(10, 240), 'minute').format();

const createRandomDate = () => {

  let start = new Date();
  let end = new Date();

  end.setMonth(start.getMonth() - 3);
  const createdDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return dayjs(createdDate).format(`YYYY.MM.DD, hh:mm:ss`);
};

console.log("Запуск функции 'createRandomDate'" , createRandomDate());
console.log("Запуск функции 'generateDate'", generateDate());


// Сгенерировать объект
const users = [
  {
    email: `ivanov@example.com`,
  },
  {
    email: `petrov@example.com`,
  }
];

const comments = [
  `Мне кажется или я уже читал это где-то?`,
  `Мне не нравится ваш стиль.`,
  `Планируете записать видосик на эту тему?`,
  `Согласен с автором!`,
  `Ощущение, что вы меня поучаете.`,
];

const generateArrayOfObject = (count, comments, users) => (
  Array(count).fill({}).map(() => ({
    user: users[getRandomInteger(0, users.length - 1)].email,
    text: shuffle(comments).slice(0, getRandomInteger(1, 3)).join(` `)
  }))
);

console.log(generateArrayOfObject(5, comments, users));

// Получить подмассив
const categories = [
  `Деревья`,
  `За жизнь`,
  `Без рамки`,
  `Разное`,
  `IT`,
  `Музыка`,
  `Кино`,
  `Программирование`,
  `Железо`
];

const getRandomSubarray = (items) => {
  items = items.slice();
  let count = getRandomInteger(1, items.length - 1);
  const result = [];
  while (count--) {
    result.push(
      ...items.splice(
        getRandomInteger(0, items.length - 1), 1
      )
    );
  }
  return result;
};

console.log(getRandomSubarray(categories));

// Сгенерировать массив
const generateArray = () => {
  const values = [];
  const randomIndex = getRandomInteger(0, 3);
  for (let i = 0; i <= randomIndex; i++) {
    values.push(categories[i]);
  }
  return shuffle(values);
};

console.log("Запуск функции 'generateArray'", generateArray());

// Получить случайное значение из массива
const generateValue = () => categories[getRandomInteger(0, categories.length - 1)];
console.log("Запуск функции 'generateValue'", generateValue());


