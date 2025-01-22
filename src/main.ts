require('file-loader?name=[name].[ext]!./index.html');
require('file-loader?name=[name].[ext]!./styles.css');
import { WindowRoot } from './window-manager';
import { BORDER_DOUBLE, Sides } from './borders';

function main() {
  console.log('initializing');
  const docMain = document.getElementById('main');
  docMain.innerHTML = 'loading...';

  drawFrame(docMain);
}

function drawFrame(el = document.body) {
  const windowManager = new WindowRoot(el, BORDER_DOUBLE, new Sides(0, 0, 0, 1));
}

main();
