video="";
status="";
function setup(){
canvas=createCanvas(480,300);
canvas.center();
video=createCapture(VIDEO);
video.size(480,300);
video.hide();
}

function preload(){

}

function draw(){
image(video,0,0,480,300);
}

function start(){
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting objects";
    input=document.getElementById("input").value;

}

function modelLoaded(){
    console.log("model loaded");
    status=true;

}