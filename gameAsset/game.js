const squares = document.querySelectorAll(".square");
const timeLeft = document.querySelector("#time-left");
const score = document.querySelector("#score");
let result = 0;
let hitPosition;
let currentTime = 60;
let timerId = null;
let time = 800;
const btn_1 = document.getElementById('btn-1');
const btn_2 = document.getElementById('btn-2');
const btn_3 = document.getElementById('btn-3');
const sound = new Audio('sound.mp3');

function randomSquare() {
    squares.forEach((square) => {
        square.classList.remove("emoji");
    });
    let randomSquare = squares[Math.floor(Math.random() * 9) + 1];
    randomSquare.classList.add("emoji");
    hitPosition = randomSquare.id;
}

squares.forEach((square) => {
    square.addEventListener("mousedown", () => {
        if (square.id == hitPosition) {
            sound.play();
            result++;
            score.textContent = result;
            hitPosition = null;
        }
    });
});

function moveEmoji() {
    btn_1.addEventListener('click', () => {
        time = 1500
        timerId = setInterval(randomSquare, time);
        btn_2.disabled = true;
        btn_3.disabled = true;
    });
    btn_2.addEventListener('click', () => {
        time = 800
        timerId = setInterval(randomSquare, time);
        btn_1.disabled = true;
        btn_3.disabled = true;
    });
    btn_3.addEventListener('click', () => {
        time = 500
        timerId = setInterval(randomSquare, time);
        btn_2.disabled = true;
        btn_1.disabled = true;
    });
}

moveEmoji();

function countDown() {
    currentTime--;
    timeLeft.textContent = currentTime;

    if (currentTime == 0) {
        clearInterval(countDownTimerId);
        clearInterval(timerId);
        alert('Game Over! Your final Score Is ${result}');
    }
}

let countDownTimerId = setInterval(countDown, 1000);
