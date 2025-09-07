// Responsive, transparent Snake Game with PIXI.js

const app = new PIXI.Application({
  transparent: true,
  resizeTo: document.body,
});
document.body.appendChild(app.view);

let gridSize = 24;
let tileCountX = Math.floor(window.innerWidth / gridSize);
let tileCountY = Math.floor(window.innerHeight / gridSize);

let snake = [{ x: Math.floor(tileCountX / 2), y: Math.floor(tileCountY / 2) }];
let direction = { x: 1, y: 0 };
let nextDirection = { x: 1, y: 0 };
let food = { x: 0, y: 0 };
let alive = true;
let moveCounter = 0;
const moveInterval = 6; // Lower is faster
let points = 0;
let foodPulse = 0;

const snakeGraphics = new PIXI.Graphics();
const foodGraphics = new PIXI.Graphics();
const pointsText = new PIXI.Text('Points: 0', {
  fill: '#222222', // Same as snake color
  fontSize: 24,
  fontFamily: 'monospace',
});
app.stage.addChild(snakeGraphics, foodGraphics, pointsText);

function resizeGame() {
  tileCountX = Math.floor(window.innerWidth / gridSize);
  tileCountY = Math.floor(window.innerHeight / gridSize);
  app.renderer.resize(window.innerWidth, window.innerHeight);
  // Clamp snake and food positions to new bounds
  snake.forEach(part => {
    part.x = Math.max(0, Math.min(tileCountX - 1, part.x));
    part.y = Math.max(0, Math.min(tileCountY - 1, part.y));
  });
  food.x = Math.max(0, Math.min(tileCountX - 1, food.x));
  food.y = Math.max(0, Math.min(tileCountY - 1, food.y));
  draw();
}
window.addEventListener('resize', resizeGame);

function draw() {
  snakeGraphics.clear();
  // Draw snake (dark gray, semi-transparent)
  snakeGraphics.beginFill(0x222222, 0.7); // 0.7 alpha for transparency
  snake.forEach(part => {
    snakeGraphics.drawRect(part.x * gridSize, part.y * gridSize, gridSize, gridSize);
  });
  snakeGraphics.endFill();

  // Draw food (white, pulsing, semi-transparent)
  foodGraphics.clear();
  const pulseScale = 1 + 0.2 * Math.sin(foodPulse);
  const foodSize = gridSize * pulseScale;
  const offset = (gridSize - foodSize) / 2;
  foodGraphics.beginFill(0xffffff, 0.7); // 0.7 alpha for transparency
  foodGraphics.drawRect(
    food.x * gridSize + offset,
    food.y * gridSize + offset,
    foodSize,
    foodSize
  );
  foodGraphics.endFill();

  // Draw points (bottom right)
  pointsText.text = `Points: ${points}`;
  pointsText.x = app.renderer.width - pointsText.width - 24;
  pointsText.y = app.renderer.height - pointsText.height - 16;
}

function moveSnake() {
  const head = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };

  // Wrap around screen
  head.x = (head.x + tileCountX) % tileCountX;
  head.y = (head.y + tileCountY) % tileCountY;

  // Check collision with self
  if (snake.some(part => part.x === head.x && part.y === head.y)) {
    alive = false;
    return;
  }

  snake.unshift(head);

  // Check food
  if (head.x === food.x && head.y === food.y) {
    points++;
    placeFood();
  } else {
    snake.pop();
  }
}

function placeFood() {
  let newFood;
  do {
    newFood = {
      x: Math.floor(Math.random() * tileCountX),
      y: Math.floor(Math.random() * tileCountY),
    };
  } while (snake.some(part => part.x === newFood.x && part.y === newFood.y));
  food = newFood;
}

// Place food almost to the right border, aligned with the snake's row
function placeInitialFood() {
  const head = snake[0];
  // Place food 2 columns from the right edge, same row as snake
  const fx = tileCountX - 2;
  const fy = head.y;
  food = { x: fx, y: fy };
}

window.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowUp' && direction.y !== 1) nextDirection = { x: 0, y: -1 };
  if (e.key === 'ArrowDown' && direction.y !== -1) nextDirection = { x: 0, y: 1 };
  if (e.key === 'ArrowLeft' && direction.x !== 1) nextDirection = { x: -1, y: 0 };
  if (e.key === 'ArrowRight' && direction.x !== -1) nextDirection = { x: 1, y: 0 };
});

app.ticker.add(() => {
  if (!alive) return;
  moveCounter++;
  foodPulse += 0.15;
  if (moveCounter >= moveInterval) {
    direction = nextDirection;
    moveSnake();
    draw();
    moveCounter = 0;
  } else {
    draw(); // Redraw for food pulse animation even if not moving
  }
});

placeInitialFood();
draw();