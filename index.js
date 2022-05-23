const app = new PIXI.Application({ backgroundColor: 0x1099bb });
document.body.appendChild(app.view);

// create a texture from an image path
const texture = PIXI.Texture.from('https://img.icons8.com/small/2x/mac-os.png');

// Scale mode for pixelation
texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;

//from left top to left bottom
for (let i = 0; i < 8; i++) {
  createBunny(
    Math.floor(0.1 * app.screen.width),
    Math.floor(Number(i) * 0.1 * app.screen.height) + Number(100)
  );
}
//from left top to right top
for (let i = 0; i < 8; i++) {
  createBunny(
    Number(30) + Math.floor(Number(i) * 0.1 * app.screen.width) + Number(100),
    Math.floor(0.1 * app.screen.height)
  );
}
//from right top to right bottom
for (let i = 0; i < 8; i++) {
  createBunny(
    Number(app.screen.width - 150) + Math.floor(0.1 * app.screen.width),
    Math.floor(Number(i) * 0.1 * app.screen.height) + 100
  );
}
//from left bottom to right bottom
for (let i = 0; i < 8; i++) {
  createBunny(
    30 + Math.floor(Number(i) * 0.1 * app.screen.width) + 100,
    Number(app.screen.height - 80) + Math.floor(0.1 * app.screen.height)
  );
}
let counter = 0;
const graphics = new PIXI.Graphics();
// // Rectangle 2
graphics.lineStyle(2, 0xffffff, 1);
graphics.alpha = 0.5;
graphics.beginFill(0xaa4f08);
//can be changed it according to height and width of the viewport
graphics.drawRect(320, 220, 150, 150);
graphics.endFill();
app.stage.addChild(graphics);

let bounds = graphics.getBounds();
console.log(bounds);
function createBunny(x, y) {
  // create our little bunny friend..
  const bunny = new PIXI.Sprite(texture);

  // enable the bunny to be interactive... this will allow it to respond to mouse and touch events
  bunny.interactive = true;

  // this button mode will mean the hand cursor appears when you roll over the bunny with your mouse
  bunny.buttonMode = true;

  // center the bunny's anchor point
  bunny.anchor.set(0.5);

  // make it a bit bigger, so it's easier to grab
  bunny.scale.set(1);

  // setup events for mouse + touch using
  // the pointer events
  bunny
    .on('pointerdown', onDragStart)
    .on('pointerup', onDragEnd)
    .on('pointerupoutside', onDragEnd)
    .on('pointermove', onDragMove);

  // For mouse-only events
  // .on('mousedown', onDragStart)
  // .on('mouseup', onDragEnd)
  // .on('mouseupoutside', onDragEnd)
  // .on('mousemove', onDragMove);

  // For touch-only events
  // .on('touchstart', onDragStart)
  // .on('touchend', onDragEnd)
  // .on('touchendoutside', onDragEnd)
  // .on('touchmove', onDragMove);

  // move the sprite to its designated position
  bunny.x = x;
  bunny.y = y;

  // add it to the stage
  app.stage.addChild(bunny);

  function onDragMove() {
    if (this.dragging) {
      const newPosition = this.data.getLocalPosition(this.parent);
      if (newPosition.x > this.x || newPosition.y > this.y) {
        this.x = newPosition.x;
        this.y = newPosition.y;
        bunny.scale.x += Math.pow(10, -3);
        bunny.scale.y += Math.pow(10, -3);
        if (
          this.x > bounds.x &&
          this.y > bounds.y &&
          this.x < bounds.x + bounds.width &&
          this.y < bounds.y + bounds.height
        ) {
          bunny.scale.set(0.5);
          console.log('ball inside box');
          const style = new PIXI.TextStyle({
            fontFamily: 'Arial',
            fontSize: 36,
            fontStyle: 'italic',
            fontWeight: 'bold',
            fill: ['#ffffff', '#00ff99'], // gradient
            stroke: '#4a1850',
            strokeThickness: 5,
            dropShadow: true,
            dropShadowColor: '#000000',
            dropShadowBlur: 4,
            dropShadowAngle: Math.PI / 6,
            dropShadowDistance: 6,
            wordWrap: true,
            wordWrapWidth: 440,
            lineJoin: 'round',
          });

          // const richText = new PIXI.Text(counter, style);
          // richText.x = 600;
          // richText.y = 420;

          // app.stage.addChild(richText);
        }
      } else if (newPosition.x < this.x || newPosition.y < this.y) {
        this.x = newPosition.x;
        this.y = newPosition.y;
      } else {
        this.x = newPosition.x;
        this.y = newPosition.y;
      }
    }
  }
}

function onDragStart(event) {
  // store a reference to the data
  // the reason for this is because of multitouch
  // we want to track the movement of this particular touch
  this.data = event.data;
  this.alpha = 1;
  this.dragging = true;
  console.log('data', this.data);
}

function onDragEnd() {
  this.alpha = 1;
  this.dragging = false;
  // set the interaction data to null
  this.data = null;
}
