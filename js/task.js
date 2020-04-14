console.log("Задание 1");

const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const startBtn = document.querySelector('button[data-action="start"]');
const stopBtn = document.querySelector('button[data-action="stop"]');

const changerColor = {
    onStartColorChange() {
        startBtn.disabled = true;
        stopBtn.disabled = false;
        this.intervalId = setInterval(() => {
            const i = randomIntegerFromInterval(0, colors.length - 1);
            document.body.style.backgroundColor = colors[i];
        }, 1000);
    },
    onStopColorChange() {
        clearInterval(this.intervalId);
        startBtn.disabled = false;
        stopBtn.disabled = true;
    },
};

startBtn.addEventListener('click', changerColor.onStartColorChange.bind(changerColor));
stopBtn.addEventListener('click', changerColor.onStopColorChange.bind(changerColor));