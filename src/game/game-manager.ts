import { EventText, TextDisplay } from '../common';

const responses = [
  'Hmm.',
  'Interesting.',
  'I see.',
  'Could you put that another way?',
  "I didn't get that.",
  'Oh?',
  'Right away, sir.',
];

export class GameManager {
  textLog: TextDisplay;

  onCommandSubmitted(ev: EventText) {
    if (!this.textLog) {
      console.log(`attempted to submit text "${ev.text}" but no text log assigned`);
      return;
    }
    const response = responses[Math.floor(Math.random() * responses.length)];
    this.textLog.submitMessage(`\n> ${ev.text}\n${response}`);
  }
}
