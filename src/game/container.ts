import { GameObject } from './game-object';

export class Container extends GameObject {
  contents: Set<GameObject> = new Set();

  addObject(obj: GameObject) {
    if (this.contents.has(obj)) return;
    this.contents.add(obj);
    obj.setParent(this);
  }

  removeObject(obj: GameObject) {
    if (!this.contents.has(this)) return;
    this.contents.delete(obj);
    obj.setParent(undefined);
  }
}
