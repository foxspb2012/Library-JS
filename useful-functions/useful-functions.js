////////////////////////////////
// Различные полезные функции //
////////////////////////////////

// Копирование в буфер обмена
const copyToClipboard = (text) => navigator.clipboard && navigator.clipboard.writeText && navigator.clipboard.writeText(text);
copyToClipboard('Hello World!');

// Определить, включена ли тёмная тема (пока не получилось проверить корректную работу данного кода)
const isDarkMode = () => window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
console.log("Is dark mode:", isDarkMode());

// Прокрутить страницу к верху
const scrollToTop = (element) => element.scrollIntoView({behavior: 'smooth', block: 'start'});

// Прокрутить страницу к низу
const scrollToBottom = (element) => element.scrollIntoView({behavior: 'smooth', block: 'end'});

// Определить, есть ли элемент на экране (используем для этого IntersectionObserver)
const callback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // 'entry.target' is the dom element
      console.log(`${entry.target.id} is visible`);
    }
  })
}
const options = {
  threshold: 1.0,
};
const observer = new IntersectionObserver(callback, options);
const btn = document.getElementById('btn');
const bottomBtn = document.getElementById('bottom-btn');
observer.observe(btn);
observer.observe(bottomBtn);

// Определение платформы устройства, на каком запущен сайт (используем Use navigator.userAgent)
const detectedDeviceType = () => /Android|webOs|iPhone|iPad|BlackBerry|IEMobile|Opera Mini/i.test(
  navigator.userAgent
) ? 'Mobile' : 'Desktop';

console.log(detectedDeviceType());

// Скрыть элемент, также установить его видимость в потоке
const hideElement = (el, removeFromFlow = false) => {
  removeFromFlow ? (el.style.display = 'none')
    : (el.display.visibility = 'hidden')
}

// Получить параметры из URL-адреса (из объекта URL в JS)
const getParamByUrl = (key) => {
  const url = new URL(location.href);
  return url.searchParams.get(key);
}
console.log(getParamByUrl('https://javascript.plainenglish.io/12-common-javascript-functions-you-need-to-know-3d3a3ab712fc'));

// Произведём глубокое копирование объекта
const deepCopy = (obj) => JSON.parse(JSON.stringify(obj));
// также есть другой API-интерфейс, но поддерживается не во всех браузерах
strucuturedClone(obj);

// Функция ожидания с использованием асинхронности
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const asyncFn = async () => {
  await wait(1000);
  console.log('Waiting for an asynchronous function to finish executing');
}

asyncFn();








