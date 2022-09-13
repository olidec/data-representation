var canvas = document.getElementById('c');
  if (canvas.getContext) {
    // Access the rendering context
    var ctx = canvas.getContext('2d');
    // ImageData object
    var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    
    function paint() {
      // data represents the Uint8ClampedArray containing the data
      // in the RGBA order [r0, g0, b0, a0, r1, g1, b1, a1, ..., rn, gn, bn, an]
      let numPixels = imageData.data.length/4;

      // grayscale
      // newData = [];
      // for (let i = 0; i < numPixels; i++) {
      //   newData.push(i / numPixels * 255,i / numPixels * 255,i / numPixels * 255,255);
      // };
      // console.log(newData)

      // checkerboard
      newData = []
      for (let i = 0; i < numPixels; i += 1) {
        newData[4 * i + 3] = 255;
      }
      for (let i = 0; i < numPixels; i += 2) {
        newData[4 * i] = 255;
      }
      for (let i = 1; i < numPixels; i += 2) {
        newData[4 * i + 1] = 255;
      }
      // manual
      // newData = []
      // newData = [ 120,120,0,255,
      //             120,0,120,255,
      //             120,120,0,255,
      //             120,0,120,255,
      //             120,120,0,255,
      //             120,0,120,255,
      //             120,120,0,255,
      //             120,0,120,255,
      //             120,120,0,255];
                  
      imageData.data.set(newData);
      ctx.putImageData(imageData, 0, 0);
    }
    paint();
  }