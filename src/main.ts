import Bird from "./bird";
import Obstacle from "./obstacle";

let gameOver = false;

const score = document.querySelector("#score") as HTMLSpanElement;

const playAgainButton = document.querySelector(
  "#play-again"
) as HTMLButtonElement;

const cancelButton = document.querySelector("#cancel") as HTMLButtonElement;

playAgainButton.addEventListener("click", () => {
  gameOver = false;
  bird.reset();
  obstacle1.reset();
  obstacle2.reset();
  modal.close();
  window.requestAnimationFrame(update);

  score.innerText = "0";
});
cancelButton.addEventListener("click", () => {
  modal.close();
});

const bird = new Bird(document.querySelector("#bird") as HTMLDivElement);
const obstacle1 = new Obstacle(
  document.querySelector("#obstacle1") as HTMLDivElement
);
const obstacle2 = new Obstacle(
  document.querySelector("#obstacle2") as HTMLDivElement
);

const modal = document.querySelector("#modal") as HTMLDialogElement;

setObstaclesHeights();

function update() {
  if (gameOver) return;

  if (
    isCollision(bird.rect(), obstacle1.rect()) ||
    isCollision(bird.rect(), obstacle2.rect()) ||
    bird.y >= 100
  ) {
    gameOver = true;
    modal.showModal();

    return;
  }

  if (obstacle1.x < bird.x) {
    const scoreValue = Number(score.innerText);
    score.innerText = (scoreValue + 1).toString();
  }

  if (obstacle1.x <= 0) {
    obstacle1.reset();
    obstacle2.reset();
    setObstaclesHeights();
  }

  bird.update();
  obstacle1.update();
  obstacle2.update();

  window.requestAnimationFrame(update);
}

window.requestAnimationFrame(update);

const test = { height1: 0, height2: 0, total: 100, gap: 10 };

console.log(test);
function randomNumberBetween(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function setObstaclesHeights() {
  obstacle1.height = Math.floor(randomNumberBetween(20, 80));
  obstacle2.height = 100 - obstacle1.height - 20;
}

function isCollision(rect1: DOMRect, rect2: DOMRect) {
  return (
    rect1.left <= rect2.right &&
    rect1.right >= rect2.left &&
    rect1.top <= rect2.bottom &&
    rect1.bottom >= rect2.top
  );
}
