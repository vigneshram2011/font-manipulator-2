function preload() {

}

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.center();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet is initialized');
}

function draw() {
    background('#969A97');
}