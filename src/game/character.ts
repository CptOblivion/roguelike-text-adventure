import { GameObject } from './game-object';

export class Character extends GameObject {
  inventory: Set<GameObject>;
}
