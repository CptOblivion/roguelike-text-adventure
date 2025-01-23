// copy base html and css
require('file-loader?name=[name].[ext]!./index.html');
require('file-loader?name=[name].[ext]!./styles.css');

import { WindowRoot } from './interface/window-manager';
import { Borders, BORDER_DOUBLE, BORDER_INVISIBLE_TOP, BORDER_SINGLE } from './interface/borders';
import { TitlePosition, WindowBase } from './interface/window';

function main() {
  console.log('initializing');
  const docMain = document.getElementById('main');
  setDarkMode(true);
  docMain.innerHTML = 'loading...';

  buildWindow(docMain);
}

function buildWindow(el = document.body) {
  const windowManager = new WindowRoot(el);
  windowManager.title = 'ROOT WINDOW';
  windowManager.borders = BORDER_DOUBLE;
  windowManager.titlePosition = 2;
  windowManager.titleShift = 23;

  const contentFrame = new WindowBase('content_frame');
  contentFrame.title = 'CONTENT FRAME';
  contentFrame.contentDirection = 0;
  windowManager.addChild(contentFrame);

  const mainScreen = new WindowBase('main_screen');
  mainScreen.title = 'MAIN SCREEN';
  mainScreen.titlePosition = 1;
  mainScreen.borders = BORDER_INVISIBLE_TOP;
  contentFrame.addChild(mainScreen);

  const statusPanel = new WindowBase('status_panel');
  statusPanel.title = 'STATUS PANEL';
  statusPanel.titlePosition = TitlePosition.center;
  statusPanel.borders = new Borders('│', '', ' ', '', '│', '', '│', '');
  statusPanel.sizeWeight = 0;
  statusPanel.sizeMin = 20;
  contentFrame.addChild(statusPanel);

  const textField = new WindowBase('text_field');
  textField.title = 'TEXT FIELD';
  textField.borders = new Borders('', '', '─', '', '─', '─', '', '');
  textField.sizeMin = 3;
  textField.sizeWeight = 0;
  windowManager.addChild(textField);

  windowManager.changed = true;
  windowManager.update();
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
