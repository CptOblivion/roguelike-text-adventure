import { Room } from './room';

export class WorldStateManager {
  map: Room[] = [];

  constructor() {
    // placeholder room fill
    this.map.push(new Room());
  }
}
