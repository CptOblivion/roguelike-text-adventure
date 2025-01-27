import { GameObject } from './game-object';

export class Exits {
  north?: Room;
  south?: Room;
  east?: Room;
  west?: Room;
  other: { [key: string]: Room } = {};
}

export class Room extends GameObject {
  exits: Exits = new Exits();
}

export class WorldStateManager {
  map: Room[] = [];

  constructor() {
    // placeholder room fill
    this.map.push(new Room());
  }
}
