require('file-loader?name=[name].[ext]!./index.html');
require('file-loader?name=[name].[ext]!./styles.css');
import * as WindowManager from './window-manager';

function main() {
  console.log('initializing');
  const docMain = document.getElementById('main');
  docMain.innerHTML = 'loading...';

  drawFrame(docMain);
}

function drawFrame(el = document.body) {
  const windowManager = new WindowManager.WindowRoot(
    el,
    new WindowManager.Borders('|', '|', '-', '-', 'O'),
    new WindowManager.Sides(2, 2, 1, 1),
    new WindowManager.Sides(2, 2, 1, 1)
  );
}

main();
