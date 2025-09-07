const app = new PIXI.Application({
  transparent: true,
  resizeTo: document.body,
});
document.body.appendChild(app.view);

// Get the texture for rope.
const trailTexture = PIXI.Texture.from("/assets/images/pointer.png");
const historyX = [];
const historyY = [];
// historySize determines how long the trail will be.
const historySize = 83;
// ropeSize determines how smooth the trail will be.
const ropeSize = 83;
const points = [];

// Create history array.
for (let i = 0; i < historySize; i++) {
  historyX.push(0);
  historyY.push(0);
}
// Create rope points.
for (let i = 0; i < ropeSize; i++) {
  points.push(new PIXI.Point(0, 0));
}

// Create the rope
const rope = new PIXI.SimpleRope(trailTexture, points);

// Set the blendmode
rope.blendmode = PIXI.BLEND_MODES.ADD;

app.stage.addChild(rope);

// Listen for animate update
app.ticker.add((delta) => {
  // Avoid rendering if data not available
  if (app.renderer.plugins.interaction.eventData.data === null) {
    return;
  }
  // Read mouse points
  const mouseposition = app.renderer.plugins.interaction.mouse.global;
  // const mouseposition = app.renderer.plugins.interaction.eventData.data.global;

  // Update the mouse values to history
  historyX.pop();
  historyX.unshift(mouseposition.x);
  historyY.pop();
  historyY.unshift(mouseposition.y);
  // Update the points to correspond with history.
  for (let i = 0; i < ropeSize; i++) {
    const p = points[i];
    // Smooth the curve with cubic interpolation to prevent sharp edges.
    const ix = cubicInterpolation(historyX, (i / ropeSize) * historySize);
    const iy = cubicInterpolation(historyY, (i / ropeSize) * historySize);

    p.x = ix;
    p.y = iy;
  }
});

/**
 * Cubic interpolation based on https://github.com/osuushi/Smooth.js
 */
function clipInput(k, arr) {
  if (k < 0) k = 0;
  if (k > arr.length - 1) k = arr.length - 1;
  return arr[k];
}

function getTangent(k, factor, array) {
  return (factor * (clipInput(k + 1, array) - clipInput(k - 1, array))) / 2;
}

function cubicInterpolation(array, t, tangentFactor) {
  if (tangentFactor == null) tangentFactor = 1;

  const k = Math.floor(t);
  const m = [
    getTangent(k, tangentFactor, array),
    getTangent(k + 1, tangentFactor, array),
  ];
  const p = [clipInput(k, array), clipInput(k + 1, array)];
  t -= k;
  const t2 = t * t;
  const t3 = t * t2;
  return (
    (2 * t3 - 3 * t2 + 1) * p[0] +
    (t3 - 2 * t2 + t) * m[0] +
    (-2 * t3 + 3 * t2) * p[1] +
    (t3 - t2) * m[1]
  );
}

// Create the blinking target
const target = new PIXI.Graphics();
const targetRadius = 10;

// For pulsing and wave effect
let pulseTime = 0;

// Create a container for the wave effect
const wave = new PIXI.Graphics();
app.stage.addChild(wave);

// Function to place target at a random position
function placeTargetRandomly() {
  const margin = 20;
  const x = Math.random() * (app.renderer.width - 2 * margin) + margin;
  const y = Math.random() * (app.renderer.height - 2 * margin) + margin;
  target.x = x;
  target.y = y;
  wave.x = x;
  wave.y = y;
  target.visible = true;
  wave.visible = true;
}
placeTargetRandomly();

// Draw the target
function drawTarget(pulseScale = 1) {
  target.clear();

  // Sensible (hit) area: invisible, larger circle for interaction
  target.beginFill(0x000000, 0);
  target.drawCircle(0, 0, targetRadius * 2.2);
  target.endFill();

  // Lighter yellow pulsating circle (highlight over #ffc000 background)
  // Use #fff700 for a bright, light yellow
  target.beginFill(0xfff700, 1);
  target.drawCircle(0, 0, targetRadius * pulseScale);
  target.endFill();
}
drawTarget();

target.interactive = true;
target.cursor = 'pointer';

// Fade-out state for target
let fadingOut = false;
let fadeValue = 1;

// On mouseover, fade out and reposition after fade
target.on('pointerover', () => {
  if (!fadingOut) {
    fadingOut = true;
    fadeValue = 1;
  }
});

app.stage.addChild(target);

// Pulse and wave effect in ticker
app.ticker.add((delta) => {
  pulseTime += delta / 60;

  // Pulse between 1 and 1.25 scale
  const pulseScale = 1 + 0.25 * Math.sin(pulseTime * 2);

  // Handle fade out
  if (fadingOut) {
    fadeValue -= 0.08 * delta;
    if (fadeValue <= 0) {
      fadeValue = 0;
      fadingOut = false;
      target.visible = false;
      wave.visible = false;
      setTimeout(() => {
        fadeValue = 1;
        target.alpha = 1;
        wave.alpha = 1;
        placeTargetRandomly();
        target.visible = true;
        wave.visible = true;
      }, 100);
    }
    target.alpha = fadeValue;
    wave.alpha = fadeValue;
  } else {
    target.alpha = 1;
    wave.alpha = 1;
  }

  drawTarget(pulseScale);

  // Draw wave
  wave.clear();
  const waveProgress = (pulseTime % 1);
  const waveAlpha = 1 - waveProgress;
  const waveRadius = targetRadius + waveProgress * 30;
  if (target.visible) {
    wave.lineStyle(0);
    wave.beginFill(0xffffff, waveAlpha * 0.4);
    wave.drawCircle(0, 0, waveRadius);
    wave.endFill();
  }
});

// Target animation state
let isMoving = false;
let moveStart = { x: 0, y: 0 };
let moveEnd = { x: 0, y: 0 };
let moveProgress = 0;
const moveDuration = 60; // frames for the spiral move (adjust for speed)
let spiralAngle = 0;

// Helper: ease in-out cubic
function easeInOutCubic(t) {
  return t < 0.5
    ? 4 * t * t * t
    : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

// Modified placeTargetRandomly to return position
function getRandomTargetPosition() {
  const margin = 20;
  const x = Math.random() * (app.renderer.width - 2 * margin) + margin;
  const y = Math.random() * (app.renderer.height - 2 * margin) + margin;
  return { x, y };
}

// Start moving the target to a new random position in a spiral
function moveTargetToRandom() {
  isMoving = true;
  moveProgress = 0;
  moveStart = { x: target.x, y: target.y };
  moveEnd = getRandomTargetPosition();
  spiralAngle = 0;
  wave.visible = false;
}

target.on('pointerover', () => {
  if (!isMoving) {
    moveTargetToRandom();
  }
});

// Overwrite ticker logic for spiral movement
app.ticker.add((delta) => {
  pulseTime += delta / 60;

  // Pulse between 1 and 1.25 scale
  const pulseScale = 1 + 0.25 * Math.sin(pulseTime * 2);

  if (isMoving) {
    moveProgress += delta;
    let t = Math.min(moveProgress / moveDuration, 1);
    let easeT = easeInOutCubic(t);

    // Spiral parameters
    const spiralTurns = 2.5; // Number of spiral turns
    const spiralMaxRadius = 60; // Max spiral radius in px

    // Spiral angle increases with progress
    spiralAngle = spiralTurns * Math.PI * 2 * easeT;

    // Spiral radius decreases as we approach the target
    const spiralRadius = spiralMaxRadius * (1 - easeT);

    // Linear interpolation between start and end
    const centerX = moveStart.x + (moveEnd.x - moveStart.x) * easeT;
    const centerY = moveStart.y + (moveEnd.y - moveStart.y) * easeT;

    // Offset from spiral
    const offsetX = Math.cos(spiralAngle) * spiralRadius;
    const offsetY = Math.sin(spiralAngle) * spiralRadius;

    target.x = centerX + offsetX;
    target.y = centerY + offsetY;

    // Hide wave during move
    wave.visible = false;

    // End movement
    if (t >= 1) {
      isMoving = false;
      target.x = moveEnd.x;
      target.y = moveEnd.y;
      wave.x = moveEnd.x;
      wave.y = moveEnd.y;
      wave.visible = true;
    }
  }

  drawTarget(pulseScale);

  // Draw wave
  wave.clear();
  const waveProgress = (pulseTime % 1);
  const waveAlpha = 1 - waveProgress;
  const waveRadius = targetRadius + waveProgress * 30;
  if (target.visible && !isMoving) {
    wave.lineStyle(0);
    wave.beginFill(0xffffff, waveAlpha * 0.4);
    wave.drawCircle(0, 0, waveRadius);
    wave.endFill();
  }
});
