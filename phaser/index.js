// Get the canvas and context
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Game variables
const paddleWidth = 100;
const paddleHeight = 10;
const ballRadius = 10;
let paddleX = (canvas.width - paddleWidth) / 2;
let paddleSpeed = 7;
let ballX = canvas.width / 2;
let ballY = ballRadius;
let ballSpeedX = 2;
let ballSpeedY = 2;
let score = 0;

// Event listener for paddle movement
document.addEventListener('mousemove', (event) => {
    const relativeX = event.clientX - canvas.offsetLeft;
    if (relativeX > paddleWidth / 2 && relativeX < canvas.width - paddleWidth / 2) {
        paddleX = relativeX - paddleWidth / 2;
    }
});

// Update game state
function update() {
    ballX += ballSpeedX;
    ballY += ballSpeedY;

    // Ball collision with walls
    if (ballX + ballSpeedX > canvas.width - ballRadius || ballX + ballSpeedX < ballRadius) {
        ballSpeedX = -ballSpeedX;
    }
    if (ballY + ballSpeedY < ballRadius) {
        ballSpeedY = -ballSpeedY;
    } else if (ballY + ballSpeedY > canvas.height - ballRadius) {
        if (ballX > paddleX && ballX < paddleX + paddleWidth) {
            ballSpeedY = -ballSpeedY;
            score++;
        } else {
            // Game Over
            ballX = canvas.width / 2;
            ballY = ballRadius;
            ballSpeedX = 2;
            ballSpeedY = 2;
            score = 0;
        }
    }
}

// Draw game objects
function draw() {
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw paddle
    ctx.fillStyle = '#007bff';
    ctx.fillRect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);

    // Draw ball
    ctx.beginPath();
    ctx.arc(ballX, ballY, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = '#ff0000';
    ctx.fill();
    ctx.closePath();

    // Draw score
    ctx.font = '24px Arial';
    ctx.fillStyle = '#000';
    ctx.fillText(`Score: ${score}`, 10, 30);
}

// Main game loop
function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

// Start the game
gameLoop();
