// copy base html and css
require('file-loader?name=[name].[ext]!./index.html');
require('file-loader?name=[name].[ext]!./styles.css');

import { WindowRoot } from './interface/window-root';
import { Borders, BORDER_DOUBLE, BORDER_INVISIBLE_TOP, PADDING_EVEN } from './interface/borders';
import { TitlePosition, WindowBase } from './interface/window';
import { FillDirection, WindowText } from './interface/window-text';
import { WindowTextinput } from './interface/window-textinput';

function main() {
  console.log('initializing');
  const docMain = document.getElementById('main');
  setDarkMode(true);
  docMain.innerHTML = 'loading...';

  buildWindow(docMain);
}

function buildWindow(el = document.body) {
  const windowRoot = new WindowRoot(el);
  windowRoot.title = 'ROOT WINDOW';
  windowRoot.borders = BORDER_DOUBLE;
  windowRoot.titlePosition = 2;
  windowRoot.titleShift = 23;

  const contentFrame = new WindowBase('content_frame');
  contentFrame.title = 'CONTENT FRAME';
  contentFrame.contentDirection = 0;
  windowRoot.addChild(contentFrame);

  const textLog = new WindowText('text_log');
  textLog.title = 'TEXT LOG';
  textLog.titlePosition = 1;
  textLog.borders = BORDER_INVISIBLE_TOP;
  textLog.padding = PADDING_EVEN;
  textLog.addText(
    'you are standing in a place\nthere is some stuff\nexits are some directions or whatever\n\nwhat do you do I guess'
  );
  textLog.fillDirection = FillDirection.bottomUp;
  contentFrame.addChild(textLog);

  const statusPanel = new WindowBase('status_panel');
  statusPanel.title = 'STATUS PANEL';
  statusPanel.titlePosition = TitlePosition.center;
  statusPanel.borders = new Borders('│', '', ' ', '', '│', '', '│', '');
  statusPanel.sizeWeight = 0;
  statusPanel.sizeMin = 20;
  contentFrame.addChild(statusPanel);

  const textField = new WindowTextinput();
  textField.title = 'TEXT FIELD';
  textField.borders = new Borders('', '', '─', '', '─', '─', '', '');
  textField.sizeMin = 4;
  windowRoot.addChild(textField);

  windowRoot.changed = true;
  WindowRoot.redraw();
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
