import { EventText } from '../common';

export class GameManager {
  onCommandSubmitted(ev: EventText) {
    console.log(`submitted ${ev.text}`);
  }
}
