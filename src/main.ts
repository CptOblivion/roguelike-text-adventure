require('file-loader?name=[name].[ext]!./index.html');
require('file-loader?name=[name].[ext]!./styles.css');
import { WindowRoot } from './interface/window-manager';
import { BORDER_DOUBLE, BORDER_SINGLE_DOUBLE, BORDER_DOUBLE_SINGLE } from './interface/borders';
import { WindowBase } from './interface/window';

function main() {
  console.log('initializing');
  const docMain = document.getElementById('main');
  docMain.innerHTML = 'loading...';

  buildWindow(docMain);
}

function buildWindow(el = document.body) {
  const windowManager = new WindowRoot(el);
  windowManager.title = 'WINDOW MANAGER';
  windowManager.borders = BORDER_DOUBLE;

  const mainScreen = new WindowBase('main_screen');
  mainScreen.title = 'MAIN SCREEN';
  mainScreen.borders = BORDER_SINGLE_DOUBLE;
  windowManager.addChild(mainScreen);

  const textField = new WindowBase('text_field');
  textField.title = 'TEXT FIELD';
  textField.borders = BORDER_DOUBLE_SINGLE;
  textField.sizeMin = 4;
  textField.sizeWeight = 0;
  windowManager.addChild(textField);
  windowManager.changed = true;
  windowManager.update();
}

main();
