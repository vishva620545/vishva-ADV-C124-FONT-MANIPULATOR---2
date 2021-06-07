difference=0;
rightwristx=0;
leftwristx=0;

function setup()
{
    video=createCapture(VIDEO);
    video.size(650,600);
    canvas=createCanvas(650,600);
    canvas.position(560,150);

    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotpose);
}

function gotpose(results)
{
  if(results.length>0)
  {
      console.log(results);

      leftwristx=results[0].pose.leftWrist.x;
      righttwristx=results[0].pose.rightWrist.x;
      difference=floor(leftwristx-righttwristx);
      console.log("leftwristx="+leftwristx+"righttwristx="+righttwristx+"difference="+difference);
  }
}

function modelLoaded()
{
    console.log('posenet is loaded');

}

function draw()
{
    background('#ff80aa');
    document.getElementById("text").innerHTML="width and height of a font size will be="+difference+"px";
    fill('#000000');
    textSize(difference);
    text('vishva',100,500);
}