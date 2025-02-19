// copy base html and css
require('file-loader?name=[name].[ext]!./index.html');
require('file-loader?name=[name].[ext]!./styles.css');

import { WindowRoot } from './interface/window-root';
import { Borders, BORDER_DOUBLE, BORDER_INVISIBLE_TOP, PADDING_EVEN } from './interface/borders';
import { TitlePosition, WindowBase } from './interface/window';
import { FillDirection, WindowText } from './interface/window-text';
import { WindowTextinput } from './interface/window-textinput';
import { GameManager } from './game/game-manager';

function main() {
  const docMain = document.getElementById('main');
  setDarkMode(true);
  docMain.innerHTML = 'loading...';

  buildWindow(docMain);
}

function buildWindow(el = document.body) {
  const windowRoot = new WindowRoot(el);
  windowRoot.title = ' DEFINITELY A REAL GAME ';
  windowRoot.borders = BORDER_DOUBLE;
  windowRoot.titlePosition = 1;

  const contentFrame = new WindowBase('content_frame');
  contentFrame.contentDirection = 0;
  windowRoot.addChild(contentFrame);

  const textLog = new WindowText('text_log');
  textLog.padding = PADDING_EVEN;
  textLog.addText(
    'You drop trembling from your bay, for the first time, again.\nYou are in a bare metal room save for the empty space suit that stood watch, waiting, while you slept.\nOn the starboard wall is a hatch wich a lever beside it.\nYou have nothing.'
  );
  textLog.fillDirection = FillDirection.bottomUp;
  contentFrame.addChild(textLog);

  const statusPanel = new WindowBase('status_panel');
  statusPanel.titlePosition = TitlePosition.center;
  statusPanel.borders = new Borders('│', '', ' ', '', '│', '', '│', '');
  statusPanel.sizeWeight = 0;
  statusPanel.sizeMin = 20;
  contentFrame.addChild(statusPanel);

  const textField = new WindowTextinput();
  textField.borders = new Borders('', '', '─', '', '─', '─', '', '');
  textField.sizeMin = 4;
  windowRoot.addChild(textField);

  windowRoot.changed = true;
  WindowRoot.redraw();

  const gameManager = new GameManager();
  gameManager.textLog = textLog;
  textField.addEventListener('submittext', gameManager.onCommandSubmitted.bind(gameManager));
}

main();

function setDarkMode(dark: boolean) {
  const CLASS_DARK = 'dark';
  if (dark && !document.body.classList.contains(CLASS_DARK)) {
    document.body.classList.add(CLASS_DARK);
    return;
  }
  if (!dark && document.body.classList.contains(CLASS_DARK)) {
    document.body.classList.remove(CLASS_DARK);
  }
}
