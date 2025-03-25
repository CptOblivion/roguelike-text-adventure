import { GameObject } from './game-object';
import { FailWithReason, Success } from '../common';

export class Character extends GameObject {
  inventory: Set<GameObject>;

  get(object: GameObject): FailWithReason {
    const [canGet, reason] = object.canGet();
    if (!canGet) return [false, reason];
    object.setParent(this);
    return Success;
  }
}
