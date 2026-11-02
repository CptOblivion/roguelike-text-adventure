// copy base html and css
require('file-loader?name=[name].[ext]!./public/index.html');
require('file-loader?name=[name].[ext]!./public/styles.css');
require('file-loader?name=[name].[ext]!./public/favicon.png');
require('file-loader?name=[name].[ext]!./public/flower.png');

// don't allow deltaT to get larger than 50ms
// mainly to avoid big logic jumps when returning to a tab that was suspended in the background
const MAX_FRAME_TIME = (1 / 20) * 1000;

function main() {
  const docMain = document.getElementById('main');
  if (docMain == null) {
    throw new Error('failed to find main element');
  }
  docMain.innerHTML = 'loading...';

  buildWindow(docMain);
}

function buildWindow(el = document.body) {
  new WindowRoot(el);
}

class WindowRoot {
  private canvas: HTMLCanvasElement;
  private static instance: WindowRoot;
  private lastFrametime: number;
  private scale: number = 2;
  private context: CanvasRenderingContext2D;

  private path: Path;

  bees: Bee[];
  private flowers: Flower[];

  constructor(el: HTMLElement) {
    if (WindowRoot.instance !== undefined) {
      throw 'attempted to create a new window root when one already exists!';
    }
    el.textContent = '';
    WindowRoot.instance = this;

    this.canvas = document.createElement('canvas');

    const context = this.canvas.getContext('2d', { alpha: false });
    if (context == null) {
      throw 'unable to create canvas context';
    }
    this.context = context;

    el.appendChild(this.canvas);
    this.canvas.width = 400;
    this.canvas.height = 400;
    this.canvas.style = `
    width: 1024px;
    height: 1024px;
    `;

    this.path = new Path([new Vector2(0, 0), new Vector2(60, 60), new Vector2(-60, 60)]);

    this.bees = [new Bee(this.path)];
    this.flowers = [new Flower(new Vector2(30, 30), 8), new Flower(new Vector2(-30, 30), 8)];

    this.lastFrametime = performance.now();

    requestAnimationFrame(this.update.bind(this));
  }

  static getCurrent(): WindowRoot {
    return WindowRoot.instance;
  }

  private async update(frameTime: number): Promise<void> {
    const deltaTMS = Math.min(frameTime - this.lastFrametime, MAX_FRAME_TIME);
    this.lastFrametime = frameTime;

    const deltaT = deltaTMS / 1000;

    for (const bee of this.bees) {
      bee.update(deltaT);
    }

    for (const flower of this.flowers) {
      flower.update(deltaT);
    }

    this.context.fillStyle = 'lightGreen';
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    for (const flower of this.flowers) {
      flower.draw(this.context, this.canvas, this.scale);
    }

    for (const bee of this.bees) {
      bee.draw(this.context, this.canvas, this.scale);
    }

    requestAnimationFrame(this.update.bind(this));
  }
}

class Vector2 {
  x: number;
  y: number;
  length: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.length = Math.sqrt(this.x * this.x + this.y * this.y);
  }

  private fixedNumber(num: number): string {
    if (num > 0) {
      return ' ' + num.toFixed(2);
    }
    return num.toFixed(2);
  }

  public print(): string {
    return `${this.fixedNumber(this.x)}, ${this.fixedNumber(this.y)}`;
  }

  public lerp(other: Vector2, t: number): Vector2 {
    return new Vector2(this.x - (this.x - other.x) * t, this.y - (this.y - other.y) * t);
  }

  public add(other: Vector2): Vector2 {
    return new Vector2(this.x + other.x, this.y + other.y);
  }

  public subtract(other: Vector2): Vector2 {
    return new Vector2(this.x - other.x, this.y - other.y);
  }

  public scale(other: Vector2): Vector2 {
    return new Vector2(this.x * other.x, this.y * other.y);
  }
}

class Path {
  positions: Vector2[];
  constructor(positions: Vector2[]) {
    this.positions = positions;
  }
}

abstract class GameObject {
  abstract getPosition(): Vector2;
  abstract update(deltaT: number): void;

  abstract drawImpl(
    context: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement,
    _scale: number,
  ): void;

  draw(context: CanvasRenderingContext2D, canvas: HTMLCanvasElement, scale: number): void {
    context.fillStyle = 'black';
    context.strokeStyle = 'black';
    this.drawImpl(context, canvas, scale);
  }

  getTransformedPosition(canvas: HTMLCanvasElement, scale: number): Vector2 {
    return this.getPosition()
      .scale(new Vector2(scale, scale))
      .add(new Vector2(canvas.width / 2, canvas.height / 2));
  }
}

class Bee extends GameObject {
  path: Path;
  currentNode: number = 0;
  pathPosition: number = 0;

  constructor(path: Path) {
    super();
    this.path = path;
  }

  public update(deltaT: number) {
    this.pathPosition += deltaT;
    if (this.pathPosition > 1) {
      this.pathPosition -= 1;
      this.currentNode += 1;
      if (this.currentNode >= this.path.positions.length) {
        this.currentNode = 0;
      }
    }
  }

  public getPosition(): Vector2 {
    const nextNode = this.currentNode + 1 < this.path.positions.length ? this.currentNode + 1 : 0;
    return this.path.positions[this.currentNode].lerp(
      this.path.positions[nextNode],
      this.pathPosition,
    );
  }

  public drawImpl(context: CanvasRenderingContext2D, canvas: HTMLCanvasElement, scale: number) {
    const pos = this.getTransformedPosition(canvas, scale);
    context.fillRect(pos.x, pos.y, 2, 2);
  }
}

class Flower extends GameObject {
  position: Vector2;
  radius: number;
  isColliding: boolean = false;
  sprite: HTMLImageElement;

  constructor(position: Vector2, radius: number) {
    super();
    this.position = position;
    this.radius = radius;
    this.sprite = new Image();
    this.sprite.src = 'http://localhost:3000/flower.png';
  }

  update(_deltaT: number): void {
    this.isColliding = WindowRoot.getCurrent().bees.some((bee) =>
      this.checkPointColliding(bee.getPosition()),
    );
  }

  checkPointColliding(point: Vector2): boolean {
    return point.subtract(this.position).length <= this.radius;
  }

  getPosition(): Vector2 {
    return this.position;
  }

  drawImpl(context: CanvasRenderingContext2D, canvas: HTMLCanvasElement, scale: number) {
    const pos = this.getTransformedPosition(canvas, scale);
    const spriteDim = new Vector2(this.sprite.width * scale, this.sprite.height * scale);
    if (this.isColliding) {
      context.fillStyle = 'green';
      context.beginPath();
      context.arc(pos.x, pos.y, this.radius * scale, 0, 2 * Math.PI, false);
      context.fill();
      context.closePath();
    }

    context.drawImage(
      this.sprite,
      pos.x - spriteDim.x / 2 - 1,
      pos.y - spriteDim.y / 2 + 1,
      spriteDim.x,
      spriteDim.y,
    );
  }
}

main();
