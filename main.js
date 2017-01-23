const ctx = document.getElementById('canvas').getContext('2d');
const img = document.querySelector('img');

img.onload = function() {
  ctx.canvas.width = img.width;
  ctx.canvas.height = img.height;
  ctx.drawImage(img, 0, 0);

  ctx.fillStyle = '#ccc';
  ctx.font      = '1000px Arial';
  ctx.textAlign = 'right';
  ctx.fillText('Tripmoment', ctx.canvas.width - 20, ctx.canvas.height - 50);
}

function markText(options, callback) {
  this.setAttribute('anonymous', 'crossOrigin');
  this.onload = function() {
    const { text, fontSize, fontFamily, color } = options;
    console.log(text, fontSize, fontFamily, color)
    const ctx = document.createElement('canvas').getContext('2d');

    ctx.canvas.width = this.width;
    ctx.canvas.height = this.height;

    ctx.drawImage(this, 0, 0);

    ctx.save();
    ctx.fillStyle = '#fff';
    ctx.font = options.fontSize + ' ' + options.fontFamily;
    // debugger;
    console.log(ctx.canvas.width)
    switch(options.align) {
      case 'lowerRight':
        ctx.textAlign = 'right';
        ctx.fillText(
          text,
          ctx.canvas.width - 50,
          50
        );

        break;
      case 'topRight':
        ctx.textAlign = 'right';
        ctx.fillText(
          text,
          ctx.canvas.width - 20,
          20
        );
        break;
      case 'lowerLeft':
        ctx.textAlign = 'left';
        ctx.fillText(
          text,
          ctx.canvas.width - 20,
          ctx.canvas.height - 20
        );
        break;
      case 'topLeft':
        ctx.textAlign = 'left';
        ctx.fillText(
          text,
          ctx.canvas.width - 20,
          20
        );
        break;
    }
    
    callback.call(null, ctx.canvas.toDataURL());
  }
}

function watermark(img, options) {
  return {
    mark: markText.bind(img)
  }
}

var dataURL = watermark(img)
  .mark({
    text: 'Tripmoment',
    color: 'red',
    fontSize: '50px',
    fontFamily: 'PingFang TC',
    align: 'lowerRight'
  }, function(dataURL) {
    var hello = document.createElement('img');
    hello.src = dataURL;

    document.body.appendChild(hello);
  });