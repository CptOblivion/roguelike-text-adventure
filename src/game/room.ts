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

  constructor(name: string, briefFirst: string, briefReturn: string) {
    super(name, 'room');
    this.briefFirst = briefFirst;
    this.briefReturn = briefReturn;
  }
}
