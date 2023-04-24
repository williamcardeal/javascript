const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const boxSize = 20;
const canvasSize = 800;
const initialSnakeSize = 3;
const snakeColor = '#1abc9c';
const foodColor = '#e74c3c';
const speedIncreaseInterval = 10; // a cada 10 pontos, a velocidade aumenta
const initialGameSpeed = 200; // velocidade inicial em milissegundos
const speedIncreaseFactor = 0.9; // fator de aumento de velocidade
const levels = [
    { speed: 200, scoreToNextLevel: 10 },
    { speed: 150, scoreToNextLevel: 20 },
    { speed: 100, scoreToNextLevel: 30 }
];

let snake = [{x: canvasSize/2, y: canvasSize/2}];
let food = {x: 0, y: 0};
let direction = {x: 0, y: 0};
let score = 0;
let gameover = false;
let gameSpeed = initialGameSpeed;
let currentLevel = 0;

function drawSnake() {
    ctx.fillStyle = snakeColor;
    snake.forEach(segment => {
        ctx.fillRect(segment.x, segment.y, boxSize, boxSize);
    });
}

function drawFood() {
    ctx.fillStyle = foodColor;
    ctx.fillRect(food.x, food.y, boxSize, boxSize);
}

function moveSnake() {
    const head = { x: snake[0].x + direction.x,
        y: snake[0].y + direction.y
    };
    
    snake.unshift(head);
    snake.pop();
    }
    
    function checkCollision() {
    const head = snake[0];
    
    // Verifica colisão com as bordas do canvas
    if (head.x < 0 || head.x >= canvasSize || head.y < 0 || head.y >= canvasSize) {
        return true;
    }
    
    // Verifica colisão com o próprio corpo
    for (let i = 1; i < snake.length; i++) {
        if (snake[i].x === head.x && snake[i].y === head.y) {
            return true;
        }
    }
    
    // Verifica colisão com a comida
    if (head.x === food.x && head.y === food.y) {
        score++;
        spawnFood();
        increaseSpeedIfNeeded();
        growSnake();
    }
    
    return false;
    }
    
    function spawnFood() {
    food.x = Math.floor(Math.random() * canvasSize / boxSize) * boxSize;
    food.y = Math.floor(Math.random() * canvasSize / boxSize) * boxSize;
    }
    
    function increaseSpeedIfNeeded() {
    if (score > 0 && score % speedIncreaseInterval === 0) {
        gameSpeed *= speedIncreaseFactor;
        clearInterval(gameLoop);
        gameLoop = setInterval(update, gameSpeed);
        currentLevel++;
    }
    }
    
    function growSnake() {
    const tail = { x: snake[snake.length - 1].x, y: snake[snake.length - 1].y };
    snake.push(tail);
    }
    
    function update() {
    if (!gameover) {
        ctx.clearRect(0, 0, canvasSize, canvasSize);
        drawSnake();
        drawFood();
        moveSnake();
        gameover = checkCollision();
    }
    }
    
    function startGame() {
    snake = [{x: canvasSize/2, y: canvasSize/2}];
    food = {x: 0, y: 0};
    direction = {x: 0, y: 0};
    score = 0;
    gameover = false;
    gameSpeed = initialGameSpeed;
    currentLevel = 0;
    spawnFood();
    clearInterval(gameLoop);
    gameLoop = setInterval(update, gameSpeed);
    }
    
    // Iniciar o jogo quando a página carregar
    window.addEventListener('DOMContentLoaded', startGame);
