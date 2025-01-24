import { EventText, TextDisplay } from '../common';

const responses: ((string) => string)[] = [
  () => 'Hmm.',
  () => 'Interesting.',
  () => 'I see.',
  () => 'Could you put that another way?',
  () => "I didn't get that.",
  () => 'Oh?',
  () => 'Right away, sir.',
  (prompt) => `what would you say "${prompt}" really means?`,
  (prompt) => `what did you mean by "${prompt}"?`,
  (prompt) => `"${prompt}!"\n\n...That's what you sound like.`,
  () => 'No, thank you.',
];

export class GameManager {
  textLog: TextDisplay;

  onCommandSubmitted(ev: EventText) {
    if (!this.textLog) {
      console.log(`attempted to submit text "${ev.text}" but no text log assigned`);
      return;
    }
    const response = responses[Math.floor(Math.random() * responses.length)](ev.text);
    this.textLog.submitMessage(`\n> ${ev.text}\n${response}`);
  }
}
