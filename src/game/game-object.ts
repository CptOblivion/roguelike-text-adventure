import { Temperature, MatterState } from './units';

export class GameObject {
  canGet = false;
  weight = 1; // lbs
  temperature: Temperature = Temperature.normal;
  state: MatterState = MatterState.solid;
  parent?: GameObject;

  setParent(parent?: GameObject) {
    this.parent = parent;
  }
}
