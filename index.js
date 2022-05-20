const app = new PIXI.Application({ backgroundColor: 0x1099bb });
document.body.appendChild(app.view);

// create a texture from an image path
const texture = PIXI.Texture.from(
  'data:image/png;base64,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'
);

// Scale mode for pixelation
texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;

for (let i = 0; i < 8; i++) {
  createBunny(
    Math.floor(0.1 * app.screen.width),
    Math.floor(Number(i) * 0.1 * app.screen.height + Number(100))
  );
}

function createBunny(x, y) {
  // create our little bunny friend..
  const bunny = new PIXI.Sprite(texture);

  console.log('scale', bunny.scale);
  // enable the bunny to be interactive... this will allow it to respond to mouse and touch events
  bunny.interactive = true;

  // this button mode will mean the hand cursor appears when you roll over the bunny with your mouse
  bunny.buttonMode = true;

  // center the bunny's anchor point
  bunny.anchor.set(0.5);

  // make it a bit bigger, so it's easier to grab
  bunny.scale.set(0.5);

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
        bunny.scale.x += Math.pow(10, -2);
        bunny.scale.y += Math.pow(10, -2);
        console.log('size gets bigger');
      } else if (newPosition.x < this.x || newPosition.y < this.y) {
        this.x = newPosition.x;
        this.y = newPosition.y;
        bunny.scale.x -= Math.pow(10, -2);
        bunny.scale.y -= Math.pow(10, -2);
        console.log('size gets smaller');
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
