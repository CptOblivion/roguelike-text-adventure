// copy base html and css
require('file-loader?name=[name].[ext]!./index.html');
require('file-loader?name=[name].[ext]!./styles.css');

import { WindowRoot } from './interface/window-manager';
import {
  Borders,
  BORDER_DOUBLE,
  BORDER_SINGLE_DOUBLE,
  BORDER_DOUBLE_SINGLE,
} from './interface/borders';
import { WindowBase } from './interface/window';

function main() {
  console.log('initializing');
  const docMain = document.getElementById('main');
  setDarkMode(true);
  docMain.innerHTML = 'loading...';

  buildWindow(docMain);
}

function buildWindow(el = document.body) {
  const windowManager = new WindowRoot(el);
  windowManager.title = 'WINDOW MANAGER';
  windowManager.borders = BORDER_DOUBLE;

  const mainScreen = new WindowBase('main_screen');
  mainScreen.title = 'MAIN SCREEN';
  mainScreen.titlePosition = 1;
  // mainScreen.borders = BORDER_SINGLE_DOUBLE;
  mainScreen.borders = new Borders('', '', ' ', '', ' ', ' ', '', '');
  windowManager.addChild(mainScreen);

  const textField = new WindowBase('text_field');
  textField.title = 'TEXT FIELD';
  textField.titlePosition = 2;
  // textField.borders = BORDER_DOUBLE_SINGLE;
  textField.borders = new Borders('', '', '─', '', '─', '─', '', '');
  textField.sizeMin = 4;
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
