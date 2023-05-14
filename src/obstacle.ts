export default class Obstacle {
  obstacleElement;
  velocity;

  constructor(obstacleElement: HTMLDivElement) {
    this.obstacleElement = obstacleElement;

    this.velocity = 0.5;

    this.reset();
  }

  get height() {
    return Number(this.obstacleElement.style.getPropertyValue("--height"));
  }
  set height(value: number) {
    this.obstacleElement.style.setProperty("--height", value.toString());
  }

  get x() {
    return Number(this.obstacleElement.style.getPropertyValue("--x"));
  }

  set x(value: number) {
    this.obstacleElement.style.setProperty("--x", value.toString());
  }
  rect() {
    return this.obstacleElement.getBoundingClientRect();
  }

  reset() {
    this.x = 100;
    this.velocity = 0.5;
  }

  update() {
    this.x -= this.velocity;
    this.velocity += 0.0001;
  }
}
