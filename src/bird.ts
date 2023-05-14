export default class Bird {
  birdElement;
  gravity;
  isJumping;

  constructor(birdElement: HTMLDivElement) {
    this.birdElement = birdElement;
    this.gravity = window.innerWidth < 480 ? 0.5 : 1;
    this.isJumping = false;

    document.addEventListener("mousedown", () => {
      this.isJumping = true;
    });
    document.addEventListener("mouseup", () => {
      this.isJumping = false;
    });

    document.addEventListener("touchstart", () => {
      this.isJumping = true;
    });
    document.addEventListener("touchend", () => {
      this.isJumping = false;
    });

    document.addEventListener("keydown", () => {
      this.isJumping = true;
    });

    document.addEventListener("keyup", () => {
      this.isJumping = false;
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

    if (this.y <= 0) {
      this.y = 0;
    }
  }
}
