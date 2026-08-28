import { Room } from './room';

export class WorldStateManager {
  map: Room[] = [];

  constructor() {
    // placeholder room fill
    this.map.push(new Room('placeholder room', 'you enter the room', 'you re-enter the room'));
  }
}
