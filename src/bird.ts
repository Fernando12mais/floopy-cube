export default class Bird {
  birdElement;
  gravity;
  isJumping;

  constructor(birdElement: HTMLDivElement) {
    this.birdElement = birdElement;
    this.gravity = 1;
    this.isJumping = false;

    document.addEventListener("mousedown", (e) => {
      this.isJumping = true;
    });
    document.addEventListener("mouseup", (e) => {
      this.isJumping = false;
    });

    document.addEventListener("keydown", ({ code }) => {
      if (code === "Space") {
        this.isJumping = true;
      }
    });

    document.addEventListener("keyup", ({ code }) => {
      if (code === "Space") {
        this.isJumping = false;
      }
    });
    this.reset();
  }

  get y() {
    return Number(this.birdElement.style.getPropertyValue("--y"));
  }
  get x() {
    return Number(this.birdElement.style.getPropertyValue("--x"));
  }

  set y(value: number) {
    this.birdElement.style.setProperty("--y", value.toString());
  }
  rect() {
    return this.birdElement.getBoundingClientRect();
  }
  reset() {
    this.y = 50;
  }

  update() {
    if (!this.isJumping) {
      this.y += this.gravity;
    } else {
      this.y -= this.gravity * 2;
    }
  }
}
