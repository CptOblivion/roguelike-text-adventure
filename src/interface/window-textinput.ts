import { ASCIICanvas } from './ascii-canvas';
import { PADDING_EVEN } from './borders';
import { WindowBase } from './window';
import { EventEmitter, ListenerSubmitText, EventText } from '../common';
import { RichText } from '../text/richtext';

const EVENT_SUBMIT_TEXT = 'submittext';

export class WindowTextinput extends WindowBase implements EventEmitter {
  // TODO: history
  // TODO: esc or click outside text box to exit text entry
  // TODO: add event provider for line submit
  // TODO: allow player to move text cursor
  //   this will need to tie in with an actual game logic controller...
  padding = PADDING_EVEN;
  sizeMin = 3;
  sizeWeight = 0;

  private _text: string = '';
  private _capturing: boolean = false;
  private static _instance: WindowTextinput;

  private _eventListeners: { [key: string]: Set<any> } = {
    [EVENT_SUBMIT_TEXT]: new Set<ListenerSubmitText>(),
  } as const;

  constructor() {
    if (WindowTextinput._instance !== undefined) {
      throw 'attempted to create new WindowTextinput when one already exists!';
    }
    super('text_input');
    WindowTextinput._instance = this;
    document.addEventListener('keydown', this._handleKeyInput.bind(this));
    this._capturing = true;
  }

  // TODO I'm sure TS has a means to create a generic addEventListener for all types in EventListenerMap
  addEventListener(type: typeof EVENT_SUBMIT_TEXT, listener: ListenerSubmitText) {
    this._eventListeners[type].add(listener);
  }

  removeEventListener(type: typeof EVENT_SUBMIT_TEXT, listener: ListenerSubmitText) {
    this._eventListeners[type].delete(listener);
  }

  private _handleKeyInput(event: KeyboardEvent) {
    if (event.metaKey || event.ctrlKey || event.altKey) {
      // let the browser have hotkeys
      return;
    }
    if (event.key === 'Enter') {
      this._submitText();
      event.preventDefault();
      return;
    }
    if (event.key.length === 1 && event.key >= ' ' && event.key <= '~') {
      this._text += event.key;
      this.requestRedraw();
      event.preventDefault();
    } else if (event.key === 'Backspace') {
      this._text = this._text.substring(0, this._text.length - 1);
      this.requestRedraw();
      event.preventDefault();
    }
  }

  private _submitText() {
    const ev: EventText = { text: this._text };
    for (const listener of this._eventListeners[EVENT_SUBMIT_TEXT]) {
      listener(ev);
    }
    this._text = '';
    this.requestRedraw();
  }

  protected override async _update(): Promise<ASCIICanvas> {
    await this._canvas.clear();
    this._canvas.writeRichText(new RichText(this._text + '█', []), [this.indexLeft, this.indexTop]);
    super._update();
    return this._canvas;
  }
}
