class Particle {

    constructor(x,y) {
      this.x = x;
      this.y = y;
      this.vx = random(-3, 3);
      this.vy = random(-10, -1);
      this.alpha = 255;
    }
  
    finished() {
      return this.alpha < 0;
    }
  
    update() {
      this.x += this.vx;
      this.y += this.vy;
      this.alpha -= 8;
    }
  
    show() {
      noStroke();
      fill(255, this.alpha);
      ellipse(this.x, this.y, 5);
    }
  
  }