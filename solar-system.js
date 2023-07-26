const speedMultiplier = 1.5;
const radiusMultiplier = 1.2;
const sizeMultiplier = 1;

const celestialBodies = [
  {
    name: "sun",
    radius: 0 * radiusMultiplier,
    speed: 0 * speedMultiplier,
    size: 3 * sizeMultiplier,
  }, // The sun is three times the base size
  {
    name: "mercury",
    radius: 120 * radiusMultiplier,
    speed: 0.021 * speedMultiplier,
    size: 0.7 * sizeMultiplier,
  },
  {
    name: "venus",
    radius: 140 * radiusMultiplier,
    speed: 0.013 * speedMultiplier,
    size: 0.9 * sizeMultiplier,
  },
  {
    name: "earth",
    radius: 180 * radiusMultiplier,
    speed: 0.01 * speedMultiplier,
    size: 1 * sizeMultiplier,
  },
  {
    name: "moon",
    radius: 50 * radiusMultiplier,
    speed: 0.03 * speedMultiplier,
    revolvesAround: "earth",
    initialAngle: Math.random() * 2 * Math.PI,
    size: 0.2 * sizeMultiplier,
  },
  {
    name: "mars",
    radius: 220 * radiusMultiplier,
    speed: 0.008 * speedMultiplier,
    size: 0.8 * sizeMultiplier,
  },
  {
    name: "jupiter",
    radius: 260 * radiusMultiplier,
    speed: 0.004 * speedMultiplier,
    size: 1.3 * sizeMultiplier,
  },
  {
    name: "saturn",
    radius: 300 * radiusMultiplier,
    speed: 0.003 * speedMultiplier,
    size: 1.2 * sizeMultiplier,
  },
  {
    name: "uranus",
    radius: 340 * radiusMultiplier,
    speed: 0.002 * speedMultiplier,
    size: 1.1 * sizeMultiplier,
  },
  {
    name: "neptune",
    radius: 380 * radiusMultiplier,
    speed: 0.001 * speedMultiplier,
    size: 1.1 * sizeMultiplier,
  },
];

const solarSystemDom = document.getElementById("solar-system");

function calculatePosition(body, angle) {
  let parentDom;
  if (body.revolvesAround) {
    parentDom = document.getElementById(body.revolvesAround);
  } else {
    parentDom = solarSystemDom;
  }

  const parentRect = parentDom.getBoundingClientRect();
  const x =
    parentRect.left +
    parentRect.width / 2 -
    (body.size * 1) / 2 +
    body.radius * Math.cos(angle);
  const y =
    parentRect.top +
    parentRect.height / 2 -
    (body.size * 1) / 2 +
    body.radius * Math.sin(angle);

  return { x, y };
}

celestialBodies.forEach((body) => {
  let angle =
    body.name === "moon" ? body.initialAngle : Math.random() * 2 * Math.PI;
  let dom = document.getElementById(body.name);

  function updatePosition() {
    let position = calculatePosition(body, angle);
    dom.style.left = `${position.x}px`;
    dom.style.top = `${position.y}px`;

    angle += body.speed;
    requestAnimationFrame(updatePosition);
  }

  // Call the updatePosition function for each celestial body
  updatePosition();
});
