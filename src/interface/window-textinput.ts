import { ASCIICanvas } from './ascii-canvas';
import { PADDING_EVEN } from './borders';
import { WindowBase } from './window';

export class WindowTextinput extends WindowBase {
  // TODO: history
  // TODO: text cursor
  // TODO: esc or click outside text box to exit text entry
  // TODO: add event provider for line submit
  //   this will need to tie in with an actual game logic controller...
  private _text: string = '';
  private _capturing: boolean = false;
  private static _instance: WindowTextinput;
  padding = PADDING_EVEN;
  sizeMin = 3;
  sizeWeight = 0;

  constructor() {
    if (WindowTextinput._instance !== undefined) {
      throw 'attempted to create new WindowTextinput when one already exists!';
    }
    super('text_input');
    WindowTextinput._instance = this;
    document.addEventListener('keydown', this._handleKeyInput.bind(this));
    this._capturing = true;
  }

  private _handleKeyInput(event: KeyboardEvent) {
    event.preventDefault();
    if (event.key === 'Enter') {
      this._submitText();
      return;
    }
    if (event.key.length === 1 && event.key >= ' ' && event.key <= '~') {
      this._text += event.key;
      this.requestRedraw();
    } else if (event.key === 'Backspace') {
      this._text = this._text.substring(0, this._text.length - 1);
      this.requestRedraw();
    }
  }

  private _submitText() {
    this.title = this._text;
    this._text = '';
    this.requestRedraw();
  }

  protected override _update(): ASCIICanvas {
    this._canvas.clear();
    this._canvas.writeString(this._text + '█', [this.indexLeft, this.indexTop]);
    super._update();
    return this._canvas;
  }
}
