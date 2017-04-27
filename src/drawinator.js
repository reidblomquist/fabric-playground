import { fabric } from 'fabric';

let ns = {};

ns.drawSomeStuff = () => {
  var canvas = new fabric.Canvas('c');

  var paths = [];

  paths[0] = 'M -100 -100 L 200 100 L 170 200 z';
  paths[1] = 'M -50 -100 L 200 175 L 170 200 z';
  paths[2] = 'M -100 -100 L 200 100 L 170 200 L 100 100 z';
  paths[3] = 'M -100 -100 L 200 100 L 40 200 L 100 100 z';

  paths.forEach((p) => {
    var paf = new fabric.Path(p);
    paf.set({ left: (window.innerWidth * 0.5), top: 120, fill: getRandomColor() });
    canvas.add(paf)
  });

  // Generate some random colors while we play
  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

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
