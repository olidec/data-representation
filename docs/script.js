var canvas = document.getElementById('c');
  if (canvas.getContext) {
    // Access the rendering context
    var ctx = canvas.getContext('2d');
    // ImageData object
    var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    function paint() {
      // data represents the Uint8ClampedArray containing the data
      // in the RGBA order [r0, g0, b0, a0, r1, g1, b1, a1, ..., rn, gn, bn, an]
  
      newData = [ 120,120,0,255,
                  120,0,120,255,
                  120,120,0,255,
                  120,0,120,255,
                  120,120,0,255,
                  120,0,120,255,
                  120,120,0,255,
                  120,0,120,255,
                  120,120,0,255]
                  
      imageData.data.set(newData);
      ctx.putImageData(imageData, 0, 0);
    }
    paint();
  }