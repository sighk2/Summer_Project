var video;
var playing = false;
var x = 0;
var y = 0;
var w = 125;
var h = 125;
function setup()
{
  
  //createCanvas(window.innerWidth, window.innerHeight);
  createCanvas(1920,1080);
  video = createVideo(['js/assets/tameimpala.mp4']);
  //video.size(100,1000);
  video.hide();
  //noStroke();
  //fill(0);
}

function draw()
{
  
  
  background(255);
  console.log(window.innerWidth);
  console.log(window.innerHeight);
  //display the entire video
  // I want to display just the chunks and not the video itself
  //but the chunk 'images disappear if i comment this statement
  image(video,0,0,250,250);
  
  //vid.size(400, 300);

  /*var x,y,piece;
  var step = 40;
 for ( var i=0; i<image.width ; i++)
 {
  for ( var j=0; j<image.height ; j++)
  {
   x = i*40;
   y = i*40;
   piece = get (x,y,step,step);
   image ( piece, x+i*5, y+i*5);
  }
 }*/
//getting four chunks of width*height from the video 
var v1 = get (0,0,w,h);
var v2 = get (125,0,w,h);
var v3 = get (0,125,w,h);
var v4 = get(125,125,w,h);
  //displaying them elsewhere on the canvas 
image(v1,600,0);
image(v3,800,0);
image(v2,600,200);
image(v4,800,200);

}

function mousePressed()
{
  if (playing) {
    video.pause();
    //button.html('play');
  } else {
    video.play();
    //button.html('pause');
  }playing = !playing;
}
