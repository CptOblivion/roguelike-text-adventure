import { Container } from './container';

export class Exits {
  bow?: Room;
  stern?: Room;
  starboard?: Room;
  port?: Room;
  other: { [key: string]: Room } = {};
}

export class Room extends Container {
  exits: Exits = new Exits();
  briefFirst: string;
  briefReturn: string;
}
