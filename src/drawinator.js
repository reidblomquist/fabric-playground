import { fabric } from 'fabric';

let ns = {};

ns.drawSomeStuff = () => {
  var canvas = new fabric.Canvas('c');

  var paths = [];

  paths[0] = 'M -100 -100 L 200 100 L 170 200 L 100 100 z';
  paths[1] = 'M -100 -100 L 200 100 L -100 200 L 100 100 z';

  paths.forEach((p) => {
    var paf = new fabric.Path(p);
    paf.set({ left: 120, top: 120 });
    canvas.add(paf)
  });

  // Make sure we always have a full size canvas, cuz why not?!
  window.addEventListener('resize', resizeCanvas, false);

  function resizeCanvas() {
    canvas.setHeight(window.innerHeight);
    canvas.setWidth(window.innerWidth);
    canvas.renderAll();
  }

  // resize on init
  resizeCanvas();
}

export default ns;
