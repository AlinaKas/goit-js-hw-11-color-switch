const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

// Для генерации случайного числа (индекс элемента массива цветов)
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
    startBtn: document.querySelector('[data-action="start"]'),
    stopBtn: document.querySelector('[data-action="stop"]'),
    body: document.querySelector('body'),
};

let timerId = null;
refs.startBtn.addEventListener("click", startColorChange);
refs.stopBtn.addEventListener("click", stopColorChange);

function startColorChange() {
  timerId = setInterval(() => {
    refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
    // refs.body.style.backgroundColor = randomColor();
  }, 1000);
  refs.startBtn.disabled = true;
};

function stopColorChange() {
  clearInterval(timerId);
  refs.startBtn.disabled = false;
};

// ДОПОЛНИТЕЛЬНО из занятия с ментором
// Рандомный цвет

function randomColor() {
  return `rgb(${randomIntegerFromInterval(0,255)},${randomIntegerFromInterval(0,255)},${randomIntegerFromInterval(0,255)})`;
};