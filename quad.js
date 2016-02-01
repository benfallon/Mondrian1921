/*
 *
 *  Draws "Composition with Yellow, Blue, Black, Red and Gray, 1921" by Piet Mondrian
 *  Digital Recreation by Benjamin Fallon, COSC435 HW #1
 *
 */

window.onload = function main() {    

// Get A WebGL context
var canvas = document.getElementById("gl-canvas");
var gl = WebGLUtils.setupWebGL(canvas);

// setup a GLSL program
program = initShaders(gl, "vertex-shader", "fragment-shader");
gl.useProgram(program);

// look up where the vertex data needs to go.
var colorLocation = gl.getUniformLocation(program, "u_color");

//set the resolution
var positionLocation = gl.getUniformLocation(program, "u_resolution");
gl.uniform2f(positionLocation, canvas.width, canvas.height);

// Create a buffer
var buffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
gl.enableVertexAttribArray(positionLocation);
gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);
 
//**********************************COLORED RECTANGLES*********************************************//
//Parameters used for setRectangle are: setRectangle(gl, over, down, width, height)

//long yellow rectangle, top-left
setRectangle(gl, 0,0,265,15);
gl.uniform4f(colorLocation, from255(224), from255(208), from255(102), 1);
gl.drawArrays(gl.TRIANGLES, 0, 6);

//blue-green rectangle
setRectangle(gl, 0,125,50,90);
gl.uniform4f(colorLocation, from255(95), from255(85), from255(136), 1);
gl.drawArrays(gl.TRIANGLES, 0, 6);

//black rectangle
setRectangle(gl, 0,25,50,100);
gl.uniform4f(colorLocation, from255(62), from255(49), from255(46), 1);
gl.drawArrays(gl.TRIANGLES, 0, 6);

//yellow rectangle
setRectangle(gl, 0,215,50,225);
gl.uniform4f(colorLocation, from255(224), from255(208), from255(102), 1);
gl.drawArrays(gl.TRIANGLES, 0, 6);

//gray rectangle
setRectangle(gl, 0,440,55,150);
gl.uniform4f(colorLocation, from255(200), from255(200), from255(218), 1);
gl.drawArrays(gl.TRIANGLES, 0, 6);

//gray rectangle
setRectangle(gl, 60,25,205,90);
gl.uniform4f(colorLocation, from255(200), from255(200), from255(218), 1);
gl.drawArrays(gl.TRIANGLES, 0, 6);

//off-white rectangle
setRectangle(gl, 60,125,205,250);
gl.uniform4f(colorLocation, from255(240), from255(240), from255(246), 1);
gl.drawArrays(gl.TRIANGLES, 0, 6);

//black rectangle
setRectangle(gl, 60,385,110,95);
gl.uniform4f(colorLocation, 0, 0, 0, 1);
gl.drawArrays(gl.TRIANGLES, 0, 6);

//gray rectangle
setRectangle(gl, 60,490,110,55);
gl.uniform4f(colorLocation, from255(200), from255(200), from255(218), 1);
gl.drawArrays(gl.TRIANGLES, 0, 6);

//blue-green rectangle
setRectangle(gl, 275,0,205,30);
gl.uniform4f(colorLocation, from255(87), from255(77), from255(122), 1);
gl.drawArrays(gl.TRIANGLES, 0, 6);

//black rectangle
setRectangle(gl, 275,40,170,95);
gl.uniform4f(colorLocation, from255(62), from255(49), from255(46), 1);
gl.drawArrays(gl.TRIANGLES, 0, 6);

//red-orange rectangle
setRectangle(gl, 275,145,170,230);
gl.uniform4f(colorLocation, from255(187), from255(84), from255(64), 1);
gl.drawArrays(gl.TRIANGLES, 0, 6);

//off-white rectangle
setRectangle(gl, 275,385,170,95);
gl.uniform4f(colorLocation, from255(240), from255(240), from255(246), 1);
gl.drawArrays(gl.TRIANGLES, 0, 6);

//gray rectangle
setRectangle(gl, 265,490,180,100);
gl.uniform4f(colorLocation, from255(200), from255(200), from255(218), 1);
gl.drawArrays(gl.TRIANGLES, 0, 6);

//yellow rectangle
setRectangle(gl, 180,385,85,95);
gl.uniform4f(colorLocation, from255(224), from255(208), from255(102), 1);
gl.drawArrays(gl.TRIANGLES, 0, 6);

//yellow rectangle
setRectangle(gl, 180,490,85,55);
gl.uniform4f(colorLocation, from255(224), from255(208), from255(102), 1);
gl.drawArrays(gl.TRIANGLES, 0, 6);

//red rectangle
setRectangle(gl, 55,555,210,55);
gl.uniform4f(colorLocation, from255(162), from255(73), from255(49), 1);
gl.drawArrays(gl.TRIANGLES, 0, 6);

//tall off-white rectangle
setRectangle(gl, 455,40,25,440);
gl.uniform4f(colorLocation, from255(240), from255(240), from255(246), 1);
gl.drawArrays(gl.TRIANGLES, 0, 6);

//blue rectangle, bottom-right
setRectangle(gl, 445,480,35,110);
gl.uniform4f(colorLocation, from255(87), from255(77), from255(122), 1);
gl.drawArrays(gl.TRIANGLES, 0, 6);

//********************************************************************************************//

//**********************************BLACK STRIPES*********************************************//

//horizontal black stripe
setRectangle(gl, 10,205,255,10);
gl.uniform4f(colorLocation, 0, 0, 0, 1);
gl.drawArrays(gl.TRIANGLES, 0, 6);

//black stripe
setRectangle(gl, 0,15,265,10);
gl.uniform4f(colorLocation, 0,0,0,1);
gl.drawArrays(gl.TRIANGLES, 0, 6);

//black stripe
setRectangle(gl, 10,115,255,10);
gl.uniform4f(colorLocation, 0, 0, 0, 1);
gl.drawArrays(gl.TRIANGLES, 0, 6);

//vertical black stripe
setRectangle(gl, 170,125,10,420);
gl.uniform4f(colorLocation, 0, 0, 0, 1);
gl.drawArrays(gl.TRIANGLES, 0, 6);

//black stripe
setRectangle(gl, 60,375,385,10);
gl.uniform4f(colorLocation, 0, 0, 0, 1);
gl.drawArrays(gl.TRIANGLES, 0, 6);

//black stripe
setRectangle(gl, 10,430,40,10);
gl.uniform4f(colorLocation, 0, 0, 0, 1);
gl.drawArrays(gl.TRIANGLES, 0, 6);

//horizontal black stripe
setRectangle(gl, 60,545,205,10);
gl.uniform4f(colorLocation, 0, 0, 0, 1);
gl.drawArrays(gl.TRIANGLES, 0, 6);

//vertical black stripe
setRectangle(gl, 265,0,10,587);
gl.uniform4f(colorLocation, 0, 0, 0, 1);
gl.drawArrays(gl.TRIANGLES, 0, 6);

//black vertical stripe
setRectangle(gl, 50,25,10,545);
gl.uniform4f(colorLocation, 0, 0, 0, 1);
gl.drawArrays(gl.TRIANGLES, 0, 6);

//black horizontal stripe
setRectangle(gl, 275,30,205,10);
gl.uniform4f(colorLocation, 0, 0, 0, 1);
gl.drawArrays(gl.TRIANGLES, 0, 6);

  //black horizontal stripe
setRectangle(gl, 275,135,170,10);
gl.uniform4f(colorLocation, 0, 0, 0, 1);
gl.drawArrays(gl.TRIANGLES, 0, 6);

  //black vertical stripe
setRectangle(gl, 445,40,10,545);
gl.uniform4f(colorLocation, 0, 0, 0, 1);
gl.drawArrays(gl.TRIANGLES, 0, 6);

//horizontal black stripe
setRectangle(gl, 60,480,420,10);
gl.uniform4f(colorLocation, 0, 0, 0, 1);
gl.drawArrays(gl.TRIANGLES, 0, 6);

//horizontal black stripe
setRectangle(gl, 275,570,170,10);
gl.uniform4f(colorLocation, 0, 0, 0, 1);
gl.drawArrays(gl.TRIANGLES, 0, 6);

//********************************************************************************************//
 
}

// Returns a random integer from 0 to range - 1.
function randomInt(range) {
  return Math.floor(Math.random() * range);
}

//takes a value from between 0 and 255 and converts it to a floating-point number between 0.0 to 1.0
function from255(value) {
  return value/255.0;
}
 
// Fills the buffer with the values that define a rectangle.
function setRectangle(gl, x, y, width, height) {
  var x1 = x;
  var x2 = x + width;
  var y1 = y;
  var y2 = y + height;
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
     x1, y1,
     x2, y1,
     x1, y2,
     x1, y2,
     x2, y1,
     x2, y2]), gl.STATIC_DRAW);
}
