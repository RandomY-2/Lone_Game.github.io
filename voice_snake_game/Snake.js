class Snake {
    constructor() {
        this.body = [];
        this.body[0] = createVector(0, 0);
        this.xdir = 0;
        this.ydir = 0;
    }

    update() {
        this.body[0].x += this.xdir;
        this.body[0].y += this.ydir;
    }

    setDir(x, y) {
        this.xdir = x;
        this.ydir = y;
    }

    show() {
        fill(0);
        rect(this.body[0].x, this.body[0].y, 10, 10);
    }
}