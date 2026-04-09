// Jumping Rabbit Platformer Game

// Variables
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let rabbit = {
    x: 50,
    y: canvas.height - 50,
    width: 30,
    height: 30,
    gravity: 1,
    jumpPower: 15,
    velocityY: 0,
    isJumping: false
};

const platforms = [];
const gravity = 0.5;

// Platform Constructor
function Platform(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
}

// Create platforms
function createPlatforms() {
    platforms.push(new Platform(0, canvas.height - 20, canvas.width, 20)); // Ground
}

// Game Loop
function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

// Update Game State
function update() {
    // Apply gravity
    if (rabbit.isJumping) {
        rabbit.velocityY += gravity;
        rabbit.y += rabbit.velocityY;
    }

    // Collision Detection
    platforms.forEach((platform) => {
        if (rabbit.x < platform.x + platform.width &&
            rabbit.x + rabbit.width > platform.x &&
            rabbit.y + rabbit.height >= platform.y &&
            rabbit.y + rabbit.height <= platform.y + platform.height) {
            rabbit.isJumping = false;
            rabbit.velocityY = 0;
            rabbit.y = platform.y - rabbit.height;
        }
    });

    // Check if rabbit falls off the screen
    if (rabbit.y > canvas.height) {
        resetGame();
    }
}

// Draw Everything
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'brown';
    ctx.fillRect(rabbit.x, rabbit.y, rabbit.width, rabbit.height);
    ctx.fillStyle = 'green';
    platforms.forEach(platform => {
        ctx.fillRect(platform.x, platform.y, platform.width, platform.height);
    });
}

// Jump Function
function jump() {
    if (!rabbit.isJumping) {
        rabbit.isJumping = true;
        rabbit.velocityY = -rabbit.jumpPower;
    }
}

// Reset Game
function resetGame() {
    rabbit.y = canvas.height - 50;
    rabbit.velocityY = 0;
}

// Keydown Event
window.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        jump();
    }
});

createPlatforms();
gameLoop();

// Note: Ensure to include an HTML file with a canvas element for this game to run.