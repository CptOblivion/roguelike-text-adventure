import { Temperature, MatterState, Weight, Color, Size } from './units';
import { FailWithReason, Success } from '../common/common';

export class Attributes {
  weight = 1; // lbs
  size = Size.medium;
  temperature: Temperature = Temperature.normal;
  state: MatterState = MatterState.solid;
  color: Color = Color.clear;
  other: {} = {};
}

export class GameObject {
  // TODO: make an enum or something
  type: string;
  parent?: GameObject | undefined;
  attached = false;
  name: string;
  attributes = new Attributes();

  constructor(type: string, name: string) {
    this.type = type;
    this.name = name;
  }

  setParent(parent?: GameObject) {
    this.parent = parent;
  }

  canBeMoved(): FailWithReason {
    if (this.attached) {
      if (!this.parent) return [false, 'attached to space (???)']; // fallback just in case, but shouldn't be able to get here
      if (this.parent.type === 'room') return [false, 'attached to the room'];
      return [false, `attached to the ${this.parent.name}`];
    }
    if (this.attributes.size > Size.large) return [false, 'too large'];
    if (this.attributes.weight > Weight.heavy) return [false, 'too heavy'];
    return Success;
  }

  canGet(): FailWithReason {
    const [movable, reason] = this.canBeMoved();
    if (!movable) return [false, reason];
    if (this.attributes.size > Size.medium) return [false, 'too large'];
    if (this.attributes.weight > Weight.light) return [false, 'too heavy'];
    return Success;
  }

  get(newParent: GameObject): FailWithReason {
    const [canGet, reason] = this.canGet();
    if (!canGet) return [false, reason];
    this.setParent(newParent);
    return Success;
  }
}
