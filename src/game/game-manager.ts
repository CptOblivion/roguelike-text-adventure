import { EventText, TextDisplay } from '../common';
import { Parser, Action } from './Parser';
import { WorldStateManager } from './world-state-manager';
import { Player } from './player';

/**
 * go-between for parser, world state, text input and output, displays, etc
 */
export class GameManager {
  textLog: TextDisplay;

  parser: Parser = new Parser();
  worldState: WorldStateManager = new WorldStateManager();
  player: Player = new Player();

  onCommandSubmitted(ev: EventText) {
    if (!this.textLog) {
      console.error(`attempted to submit text "${ev.text}" but no text log assigned`);
      return;
    }

    this.textLog.submitMessage(`\n> ${ev.text}`);

    const response = this.parser.parse(ev.text);

    if (typeof response === 'string') {
      this.textLog.submitMessage(`${response}`);
      return;
    }

    switch (response.action) {
      case Action.go:
        if (response.subject) {
          // might not implement this one
          this.textLog.submitMessage(
            `[PLACEHOLDER]: you go ${response.direction} the ${response.subject}`,
          );
          break;
        }

        // check direction exists
        // check player is able to move
        // check way is not blocked
        // update player position
        // tick game state
        // if room has been visited, print room shorthand and return
        // print room full description
        this.textLog.submitMessage(`[PLACEHOLDER]: you go ${response.direction}`);
        break;

      case Action.get:
        // check subject exists in current room
        // check it can be percieved
        // check it can be reached
        // move to inventory
        // tick game state
        // print simple response
        this.textLog.submitMessage(`[PLACEHOLDER]: you get the ${response.subject}`);
        break;

      case Action.use:
        // check subject exists in player inventory
        // or current room, with gettable conditions
        // check object exists in current room
        // check object is reachable
        // [handwavey gesture] process interactions
        // this one may branch over to put (EG 'use statue on pedestal' or 'use gem in socket' would make sense to turn into `put ${subject} on/in ${object}`)
        this.textLog.submitMessage(
          `[PLACEHOLDER]: you use the ${response.subject} on the ${response.object}`,
        );
        break;

      case Action.give:
        this.textLog.submitMessage(
          `[PLACEHOLDER]: you give the ${response.subject} to the ${response.object}`,
        );
        break;

      case Action.put:
        // narrow case of use
        this.textLog.submitMessage(
          `[PLACEHOLDER]: you place the ${response.subject} on the ${response.object}`,
        );
        break;
    }
  }
}
