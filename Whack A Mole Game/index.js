const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
const timeLeft = document.querySelector('.time');
const startBtn = document.querySelector('.startGame');
let lastHole;
let timeUp = false;
let score = 0;
let gameTime;

const beginner = document.querySelector('.gameTime10');
beginner.addEventListener('click', () => gameTime = 10000);
const intermediate = document.querySelector('.gameTime20');
intermediate.addEventListener('click', () => gameTime = 20000);
const expert = document.querySelector('.gameTime30');
expert.addEventListener('click', () => gameTime = 30000);

// Get a random time between two values
function randomTime (min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

// Get a random list item and never the same in a row twice
function randomHole(holes) {
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];
    if(hole === lastHole){
        return randomHole(holes);
    }

    lastHole = hole;
    return hole;
} 

function peek() {
    const time = randomTime(200, 1000);
    const hole = randomHole(holes);
    hole.classList.add('up');
    setTimeout(() => {
        hole.classList.remove('up');
        if(!timeUp) peek();
    }, time);
}

function startGame() {
    scoreBoard.textContent = 0;
    timeLeft.textContent = Math.floor(gameTime / 1000);
    timeUp = false;
    score = 0;
    peek();
    setTimeout(() => {
        timeUp = true
    }, gameTime);
}

function bonk(e) {
    if(!e.isTrusted) return;
    score++;
    this.classList.remove('up');
    scoreBoard.textContent = score;
}

moles.forEach(mole => mole.addEventListener('click', bonk));

startBtn.addEventListener('click', startGame);