music="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;

function preload(){
    song=loadSound("music.mp3")
}

function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();

    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
}

function draw() {
	image(video, 0, 0, 600, 500);
}

function modelLoaded(){
    console.log("poseNet has been initialized");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        console.log("Left wrist's x position = " + leftWristX);
        console.log("Left wrist's y position = " + leftWristY);

        scoreLeftWrist=results[0].pose.keypoints[9].score;
        console.log("score Left Wrist = " + scoreLeftWrist);
       
        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        console.log("Right wrist's x position = " + rightWristX);
        console.log("Right wrist's y position = " + rightWristY);

        scoreRightWrist=results[0].pose.keypoints[10].score;
        console.log("score Right Wrist = " + scoreRightWrist);

    }
}