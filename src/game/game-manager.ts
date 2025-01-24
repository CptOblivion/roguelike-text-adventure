import { EventText, TextDisplay } from '../common';

export class GameManager {
  textLog: TextDisplay;
  onCommandSubmitted(ev: EventText) {
    if (!this.textLog) {
      console.log(`attempted to submit text "${ev.text}" but no text log assigned`);
      return;
    }
    this.textLog.submitMessage(`\n> ${ev.text}`);
  }
}
