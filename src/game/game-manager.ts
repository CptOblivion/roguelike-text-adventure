import { EventText, TextDisplay } from '../common';
import { Parser } from './Parser';

/**
 * go-between for parser, world state, text input and output, displays, etc
 */
export class GameManager {
  textLog: TextDisplay;

  parser: Parser = new Parser();

  onCommandSubmitted(ev: EventText) {
    if (!this.textLog) {
      console.log(`attempted to submit text "${ev.text}" but no text log assigned`);
      return;
    }
    console.log('some change');
    const response = this.parser.parse(ev.text);
    this.textLog.submitMessage(`\n> ${ev.text}\n${response}`);
  }
}
